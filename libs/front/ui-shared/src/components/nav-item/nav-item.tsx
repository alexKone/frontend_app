import styles from './nav-item.module.scss';
import { useRoutes, useLocation, useNavigate } from 'react-router-dom';
import useSidenav from '../../hooks/use-sidenav/use-sidenav';

/* eslint-disable-next-line */
export interface NavItemProps {
  color?: string;
  label: string;
  isButton?: boolean;
  iconName?: string;
  path?: string;
}

export function NavItem(props: NavItemProps) {
  const { toggle } = useSidenav();
  const navigate = useNavigate();
  const path = props.path ? props.path : '/';

  const handleClick = () => {
    if (!props.isButton) {
      navigate(path);
    } else {
      toggle();
    }
  }

  return (
    <div className={styles['container']}>
      {props.isButton ? (
        <button onClick={handleClick}>
          <span>icon</span>
          <span>{props.label}</span>
        </button>
      ) : (
        <>
          <span className="material-icons-outlined">{props.iconName}</span>
          <span>{props.label}</span>
        </>
      )}
    </div>
  );
}

export default NavItem;
