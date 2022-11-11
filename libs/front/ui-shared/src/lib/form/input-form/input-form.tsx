import styles from './input-form.module.scss';
import { UseFormRegister } from "react-hook-form";
import { slugify } from '../../../utils/stringify';


/* eslint-disable-next-line */

// enum InputType {
//   textarea = 'textarea',
//   text = 'text',
//   email = 'email',
//   password = 'password',
// }
// export interface InputFormProps {
//   type?: string;
//   name: string;
//   label: string;
// }

type InputProps = {
  label: string;
  register: UseFormRegister<any>;
  required: boolean;
  type: string;
  name: string;
}

export function InputForm({ label, register, required, type, name }: InputProps) {
  return (
    <div className={styles['container']}>
      <label htmlFor={`label-${slugify(label)}`}>{label}</label>
      <input type={type} id={`label-${slugify(label)}`} {...register(name, { required })} />
    </div>
  )
}

export default InputForm;
