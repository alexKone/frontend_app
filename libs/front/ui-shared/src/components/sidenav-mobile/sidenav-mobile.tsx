import { useEffect } from 'react';
import useSidenav from '../../hooks/use-sidenav/use-sidenav';
import styles from './sidenav-mobile.module.scss';

/* eslint-disable-next-line */
export interface SidenavMobileProps {
  gender?: string;
}

export function SidenavMobile(props: SidenavMobileProps) {
  const { isOpen } = useSidenav();
  return (
    <aside className={`${styles['sidenav-mobile']} ${isOpen && styles['sidenav-mobile--visible']}`}>
      <nav className={styles['container']}>
        container
      </nav>
    </aside>
  );
}

export default SidenavMobile;
