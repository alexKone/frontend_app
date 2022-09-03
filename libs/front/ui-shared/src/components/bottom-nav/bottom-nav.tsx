import styles from './bottom-nav.module.scss';

/* eslint-disable-next-line */
export interface BottomNavProps {
  children: React.ReactNode;
  color: string;
  icon?: string;
  label?: string;
}
export function BottomNav(props: BottomNavProps) {
  return (
    <aside style={{ backgroundColor: props.color}} className={styles['bottom-nav']}>
      {props.children}
    </aside>
  );
}

export default BottomNav;
