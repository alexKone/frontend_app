import styles from './bottomnav.module.scss';
// import './bottomnav.module.scss';

/* eslint-disable-next-line */
export interface BottomnavProps {
  children: React.ReactNode;
  color: string;
}

export function Bottomnav(props: BottomnavProps) {
  return (
    <aside style={{
      backgroundColor: props.color
    }} className={`${styles["bottom-nav"]}`}>
      {props.children}
    </aside>
  );
}

export default Bottomnav;
