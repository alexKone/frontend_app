import styles from './input-form.module.scss';
import { UseFormRegister } from "react-hook-form";


/* eslint-disable-next-line */

enum InputType {
  textarea = 'textarea',
  text = 'text',
  email = 'email',
  password = 'password',
}
// export interface InputFormProps {
//   type?: string;
//   name: string;
//   label: string;
// }
interface IFormValues {
  "email": string;
  "password": string;
  // Age: number;
}
type InputProps = {
  label: string;
  register: UseFormRegister<any>;
  required: boolean;
  type: string;
  name: string;
}

export function InputForm({ label, register, required, type, name }: InputProps) {
  // return (
  //   <div className={styles['container']}>
  //     <label htmlFor={`label-${props.label}`}>{props.label}</label>
  //     {props.type === 'textarea' ? (
  //       <textarea name={props.name} id=""></textarea>
  //     ) : (
  //       <input type={props.type} name={props.name} />
  //     )}
  //   </div>
  // );
  return (
    <div className={styles['container']}>
      <label htmlFor={`label-${label}`}>{label}</label>
      <input type={type} id={`label-${label}`} {...register(name, { required })} />
    </div>
  )
}

export default InputForm;
