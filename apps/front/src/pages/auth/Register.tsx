import { useMutation } from "@apollo/client";
import { ButtonForm, InputForm } from "@azwaaji/front/ui-shared"
import { Helmet } from "react-helmet"
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormValues } from "../../types";
import { CREATE_USER } from '../../graphql/mutations';
import { Link } from "react-router-dom";

const Register = () => {
  const [registerUser, { data, loading, error }] = useMutation(CREATE_USER, {
    errorPolicy: 'all',
  });
  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    registerUser({ variables: { email: data.email, password: data.password } });
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
            <ButtonForm label="register" type="submit" />
          </form>
        </div>
        <Link to="/auth/login">Login</Link>
      </div>
    </>
  )
}

export default Register;
