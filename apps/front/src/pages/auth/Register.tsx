import { useMutation } from "@apollo/client";
import { AppContext, ButtonForm, InputForm, Loading, Toast } from "@azwaaji/front/ui-shared"
import { Helmet } from "react-helmet"
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import { CREATE_USER } from '../../graphql/mutations';
import { Link, useNavigate } from 'react-router-dom';
import styles from './register.module.scss';
import { useContext, useState } from "react";
import {useEffect} from 'react';
import constants from "../../constants";


type Gender = 'male' | 'female'

interface FormREegister {
  email: string;
  password: string;
  username: string;
  birthdate: string;
  gender: Gender;
  firstname?: string;
  lastname?: string;
}


const Register = () => {
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(false)


  const { addUser, authenticate } = useContext(AppContext);
  const navigate = useNavigate();

  const [registerUser, { data, loading, error }] = useMutation(CREATE_USER, { errorPolicy: 'all' });
  const { register, handleSubmit, formState } = useForm<FormREegister>();
  const { isSubmitting } = formState

  useEffect(() => {
    if(data) {
      if(data.register.jwt) {
        localStorage.setItem(constants.token, data.register.jwt);
        localStorage.setItem(
          constants.current_user,
          JSON.stringify({
            id: data.register.user.id,
            email: data.register.user.email,
            username: data.register.user.username,
            gender: data.register.user.profile.data.attributes.gender,
          })
        );
        addUser(data.register.user)
        authenticate()

      }
    }

  }, [isSubmitting, data])

  const onSubmit: SubmitHandler<FormREegister> = (data) => {
    registerUser({ variables: {
      username: data.username,
      email: data.email,
      password: data.password,
      gender: data.gender,
      birthdate: data.birthdate,
      firstname: data.firstname ?? '',
      lastname: data.lastname ?? '' } });
  };

  return (
    <>
      <Helmet>
        <title>Register - Azwaaji</title>
      </Helmet>

      {error && (
        <Toast
          text="Une erreur est survenue. Veuillez réessayer"
          type="error"
        />
      )}

      {/* <Loading /> */}

      {/* {isSubmitting ? <Loading /> : ''} */}
      <div className="form">
        <div className="form__wrapper p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
          <InputForm
              type="text"
              label="nom d'utilisateur"
              name="username"
              register={register}
              required
            />

            <fieldset className={styles['field-radio']}>
              <legend>je suis: </legend>
              <div className={styles['field-radio__content']}>
                <input id="male" type="radio" value="male" {...register('gender')} defaultChecked/>
                <label htmlFor="male">un homme</label>
              </div>
              <div className={styles['field-radio__content']}>
                <input id="female" type="radio" value="female" {...register('gender')} />
                <label htmlFor="female">une femme</label>
              </div>
            </fieldset>

            <InputForm
              type="date"
              label="date de naissance"
              name="birthdate"
              register={register}
              required
            />
            <InputForm
              type="email"
              label="adresse email"
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
            <ButtonForm label="register" type="submit" />
          </form>
        </div>
        <Link to="/auth/login">Login</Link>
      </div>
    </>
  )
}

export default Register;
