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

type LabelPos = 'left' | 'right' | 'center'

type InputProps = {
  label: string;
  labelPos?: LabelPos;
  placeholder?: string;
  register: UseFormRegister<any>;
  required: boolean;
  type: string;
  name: string;
}

export function InputForm({ label, labelPos, placeholder, register, required, type, name }: InputProps) {
  return (
    <div className={styles['container']}>
      <label className={styles[`label-${labelPos ?? 'left'}`]} htmlFor={`label-${slugify(label)}`}>{label}</label>
      <input placeholder={placeholder ? placeholder : ''} type={type} id={`label-${slugify(label)}`} {...register(name, { required })} />
    </div>
  )
}

export default InputForm;
