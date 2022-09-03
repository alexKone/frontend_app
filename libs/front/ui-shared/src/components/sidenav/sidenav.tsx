import styles from './sidenav.module.scss';
import LinkItem from '../link-item/link-item';
import useSidenav from '../../hooks/use-sidenav/use-sidenav';
import { useEffect } from 'react';

/* eslint-disable-next-line */
interface IRouteSidenav {
  label: string;
  link: string;
  icon: string;
}
export interface SidenavProps {
  gender?: 'male'|'female',
  routes?: IRouteSidenav[]
}

export function Sidenav(props: SidenavProps) {
  const { isOpen, toggle } = useSidenav();

  return (
    <div className={`${styles['sidenav']} ${isOpen ? '' : styles['sidenav--open']}`}>
      {props.gender === 'male' ? 'homme' : 'femme'}
      <nav>
      </nav>
    </div>
  );
}

export default Sidenav;
