import styles from './link-item.module.scss';

/* eslint-disable-next-line */
export interface LinkItemProps {
  label: string;
  icon: string;
}

export function LinkItem(props: LinkItemProps) {
  return (
    <div className={styles['container']}>
      <span className="material-symbols-outlined">{props.icon}</span>
      <h1>{props.label}</h1>
    </div>
  );
}

export default LinkItem;
