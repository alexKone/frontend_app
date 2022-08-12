import styles from './toast.module.scss';

/* eslint-disable-next-line */
export interface ToastProps {
  text: string;
  type: 'error'|'success'|'warning'|'info';
}

export function Toast({text, type}: ToastProps) {
  return (
    <div className={`${styles['container']} ${styles['container-' + type]}`}>
      <p>{text}</p>
    </div>
  );
}

export default Toast;
