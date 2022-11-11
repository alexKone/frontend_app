import { useMutation } from "@apollo/client";
import { ButtonForm, InputForm } from "@azwaaji/front/ui-shared"
import { Helmet } from "react-helmet"
import { SubmitHandler, useForm } from "react-hook-form";
import { CREATE_USER } from '../../graphql/mutations';
import { Link } from "react-router-dom";
import styles from './register.module.scss';

interface FormREegister {
  email: string;
  password: string;
  username: string;
  birthdate: string;
  gender: string;
  firstname?: string;
  lastname?: string;
}

type Gender = 'male' | 'female'

const Register = () => {
  const [registerUser, { data, loading, error }] = useMutation(CREATE_USER, {
    errorPolicy: 'all',
  });
  const { register, handleSubmit } = useForm<FormREegister>();
  const onSubmit: SubmitHandler<FormREegister> = (data) => {

    console.log({data});


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
