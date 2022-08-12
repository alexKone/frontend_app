import { Link } from 'react-router-dom';
import styles from './nav-item.module.scss';

/* eslint-disable-next-line */
export interface NavItemProps {
  isButton?: boolean;
  handleClick?: () => void;
  iconName: string;
  label: string;
  outlined?: boolean;
  path?: string;
  // isActive: boolean;
}

export function NavItem(props: NavItemProps) {
  return (
    <div className={`${styles["bottom-nav__item"]} `}>
      {props.isButton ? (
        <button onClick={e => console.log(e)}>
          <span className="material-icons material-symbols-outlined">
            {props.iconName}
          </span>
          <span className={styles["label"]}>{props.label}</span>
        </button>
      ) : (
        <Link to={`${props.path}`}>
          <span className="material-icons material-symbols-outlined">
            {props.iconName}
          </span>
          <span className={styles["label"]}>{props.label}</span>
        </Link>
      )}
    </div>
  );
}

export default NavItem;
