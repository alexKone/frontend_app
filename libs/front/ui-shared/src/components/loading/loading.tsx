import styles from './loading.module.scss';

/* eslint-disable-next-line */
export interface LoadingProps {}

export function Loading(props: LoadingProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Loading!</h1>
    </div>
  );
}

export default Loading;
