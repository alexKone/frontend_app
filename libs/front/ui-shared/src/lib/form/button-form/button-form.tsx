import styles from './button-form.module.scss';

type ButtonProps = {
  label: string;
  type: "button" | "submit" | "reset" | undefined;
}

export function ButtonForm({ label, type }: ButtonProps) {
  return (
    <div className={styles['container']}>
      <button type={type}>{label}</button>
    </div>
  )
}
