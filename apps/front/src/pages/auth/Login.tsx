import { useMutation, gql } from "@apollo/client";
import { InputForm, Loading, Toast, useAuth } from "@azwaaji/front/ui-shared";
import useLocalStorage from "libs/front/ui-shared/src/lib/hooks/use-local-storage/useLocalStorage";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import constants from "../../constants";
import storageService from "../../utils/storageService";

interface IFormValues {
  email: string;
  password: string;
  // label: string;
  // Age: number;
}

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        id
        username
        email
        profile {
          data {
            attributes {
              gender
              firstname
              lastname
              birthdate
            }
          }
        }
      }
    }
  }
`;

const Login = () => {

  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState('');
  const [loginUser, { data, loading, error }] = useMutation(LOGIN, { errorPolicy: 'all'});
  const { authenticate } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {

    if (loading) setIsLoading(true)
    if (error) {
      setIsLoading(false)
      setIsError('Il y a use erreur');
    }

    if (data) {
      setIsLoading(false);
      authenticate();

      // add token and user infos in localstorage
      storageService.setItem(constants.token, data.login.jwt);
      storageService.setItem(constants.current_user, JSON.stringify({
        id: data.login.user.id,
        email: data.login.user.email,
        username: data.login.user.username,
        gender: data.login.user.profile.data.attributes.gender
      }))

      //redirect to homepage
      navigate('/', { replace: true })
    }
  }, [data, loading, error, authenticate, navigate])

  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = data => {
    loginUser({ variables: { email: data.email, password: data.password } });
  }

  return (
    <div>
      {error && <Toast text="Une erreur est survenue. Veuillez réessayer" type="error" />}
      {loading || isLoading && <Loading />}

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputForm type="email" label="E-Mail" name="email" register={register} required />
        <InputForm type="password" label="Mot de passe" name="password" register={register} required />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;
