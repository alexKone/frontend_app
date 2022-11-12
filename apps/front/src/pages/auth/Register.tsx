import { useMutation } from "@apollo/client";
import { AppContext, ButtonForm, InputForm, Loading, Toast } from "@azwaaji/front/ui-shared"
import { Helmet } from "react-helmet"
import { SubmitHandler, useForm, useFormState } from "react-hook-form";
import { CREATE_USER } from '../../graphql/mutations';
import { Link, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from "react";
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
  const [accept, setAccept] = useState(false)


  const { addUser, authenticate } = useContext(AppContext);

  const [registerUser, { data, error }] = useMutation(CREATE_USER, { errorPolicy: 'all' });
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

  }, [isSubmitting, data, addUser, authenticate])


  const onSubmit: SubmitHandler<FormREegister> = (data) => {
    if (!accept) setIsError('Il y a une erreur')
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
      <div className="auth-content">
        <div className="title">
          <h2>inscription</h2>
        </div>
      <div className="auth-content-form">
        <div className="form__wrapper p-4">
          <form onSubmit={handleSubmit(onSubmit)}>
          <InputForm
              type="text"
              label="Nom d'utilisateur"
              labelPos="center"
              placeholder="Prénom, kounia ou les 2"
              name="username"
              register={register}
              required
            />

            <fieldset className="field-radio">
              <legend>Je suis: </legend>
              <div className="field-radio__content">
                <input id="male" type="radio" value="male" {...register('gender')} defaultChecked/>
                <label htmlFor="male">Un homme</label>
              </div>
              <div className="field-radio__content">
                <input id="female" type="radio" value="female" {...register('gender')} />
                <label htmlFor="female">Une femme</label>
              </div>
            </fieldset>

            <InputForm
              type="date"
              label="Date de naissance"
              name="birthdate"
              register={register}
              required
            />
            <InputForm
              type="email"
              label="Adresse email"
              labelPos="center"
              placeholder="email@example.com"
              name="email"
              register={register}
              required
            />
            <InputForm
              type="password"
              label="Mot de passe"
              placeholder="******"
              name="password"
              register={register}
              required
            />
            <div className="field-checkbox">
              <input id="accept" type="checkbox" name="conditions" checked={accept} onChange={e => setAccept(e.target.checked)} />
              <label className="sub-label__form" htmlFor="accept">Je confirme que j'ai plus de 10 ans et j'accepte les <Link className="link-static" to={'/'}>conditions d'utilisation</Link></label>
            </div>
            <ButtonForm label="valider" type="submit" />
          </form>
        </div>
      </div>

      </div>
    </>
  )
}

export default Register;
