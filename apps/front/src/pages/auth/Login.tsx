import { useMutation } from '@apollo/client';
import {
  AppContext,
  ButtonForm,
  InputForm,
  Loading,
  Toast,
} from '@azwaaji/front/ui-shared';
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IFormValues } from '../../types';
import { supabase } from '../../client-supabase';

const Login = () => {
  // const { addUser } = useContext(AppContext);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (loading) setIsLoading(true);
  //   if (error) {
  //     setIsLoading(false);
  //     setIsError(true);
  //   }

  //   if (data) {
  //     console.log({ data });
  //     setIsLoading(false);

  //     // add token and user infos in localstorage
  //     localStorage.setItem(constants.token, data.login.jwt);
  //     localStorage.setItem(
  //       constants.current_user,
  //       JSON.stringify({
  //         id: data.login.user.id,
  //         email: data.login.user.email,
  //         username: data.login.user.username,
  //         gender: data.login.user.profile.data.attributes.gender,
  //       })
  //     );

  //     addUser(data.login.user);
  //     authenticate();

  //     //redirect to homepage
  //     navigate('/', { replace: true });
  //     // window.location.reload
  //   }
  // }, [data, loading, error, authenticate, navigate, addUser]);

  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = async (formData) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <>
      <Helmet>
        <title>Login - Azwaaji</title>
      </Helmet>
      {isError ? (
        <Toast
          text="Une erreur est survenue. Veuillez réessayer"
          type="error"
        />
      ) : (
        ''
      )}
      {/* {loading || (isLoading && <Loading />)} */}
      <div className="auth-content">
        <div className="title">
          <h2>connection</h2>
        </div>

        <div className="auth-content-form">
          <div className="form__wrapper p-4">
            {isError && <div>Une erreur est survenue. Veuillez réessayer</div>}

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
              <ButtonForm label="login" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
