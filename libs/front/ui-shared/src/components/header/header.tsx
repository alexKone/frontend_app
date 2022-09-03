import styles from './header.module.scss';
import logo from '../../../../../../apps/front/src/assets/images/logo__light.png';
import male from '../../../../../../apps/front/src/assets/images/male.png';
import female from '../../../../../../apps/front/src/assets/images/female.png';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../../store/app-context/app-context';

/* eslint-disable-next-line */
export interface HeaderProps {
  gender?: string;
}

export function Header(props: HeaderProps) {
  const { currentUser } = useContext(AppContext);

  console.log('header user =>', currentUser?.profile.data.attributes.gender);

  return (
    <div className={styles['container']}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={styles['avatar']}>
        <img src={props.gender === "male" ? female : male} alt="" />
      </div>
    </div>
  );
}

export default Header;
