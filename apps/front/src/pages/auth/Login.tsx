import { useMutation, gql } from '@apollo/client';
import { AppContext, ButtonForm, InputForm, Loading, Toast } from '@azwaaji/front/ui-shared';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import constants from '../../constants';
import { LOGIN } from '../../graphql/mutations';
import { IFormValues } from '../../types';

const Login = () => {
  const { addUser, currentUser } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [loginUser, { data, loading, error }] = useMutation(LOGIN, {
    errorPolicy: 'all',
  });
  const { authenticate } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {

    if (loading) setIsLoading(true);
    if (error) {
      setIsLoading(false);
      setIsError('Il y a use erreur');
    }

    if (data) {
      setIsLoading(false);

      // add token and user infos in localstorage
      localStorage.setItem(constants.token, data.login.jwt);
      localStorage.setItem(
        constants.current_user,
        JSON.stringify({
          id: data.login.user.id,
          email: data.login.user.email,
          username: data.login.user.username,
          gender: data.login.user.profile.data.attributes.gender,
        })
      );

      addUser(data.me);
      authenticate();

      //redirect to homepage
      navigate('/', { replace: true });
      // window.location.reload
    }
  }, [data, loading, error, authenticate, navigate, addUser]);

  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    loginUser({ variables: { email: data.email, password: data.password } });
  };

  return (
    <>
    <Helmet>
      <title>Login - Azwaaji</title>
    </Helmet>
    <div className="">
      {error && (
        <Toast
          text="Une erreur est survenue. Veuillez réessayer"
          type="error"
        />
      )}
      {loading || (isLoading && <Loading />)}
      <div className="form">
        <div className="form__wrapper p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputForm
              type="email"
              label="E-Mail"
              name="email"
              register={register}
              required
            />
            <InputForm
              type="password"
              label="Mot de passe"
              name="password"
              register={register}
              required
            />
            <ButtonForm label='login' type="submit" />
        </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
