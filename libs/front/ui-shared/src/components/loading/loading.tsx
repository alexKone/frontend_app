import styles from './loading.module.scss';

/* eslint-disable-next-line */
export interface LoadingProps {}

export function Loading(props: LoadingProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['loading__container']}>
        <h1>Welcome to Loading!</h1>
      </div>
    </div>
  );
}

export default Loading;
