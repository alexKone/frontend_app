import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './auth-header.module.scss';

const AuthHeader = () => {
  const location = useLocation()
  const [pageName, setPageName] = useState(location.pathname === '/auth/login')

  useEffect(() => {
    setPageName(location.pathname === '/auth/login')
  }, [location])

  return (
    <header className={styles['container']}>
      <div className="logo">
        <Link to="/">logo</Link>
      </div>
      <div>
        { pageName ? (
          <Link className={styles['auth-header__link']} to="/auth/register"><span className="material-symbols-outlined">login</span>inscription</Link>
        ) : (
          <Link className={styles['auth-header__link']} to="/auth/login"><span className="material-symbols-outlined">login</span>connection</Link>
        ) }
      </div>
    </header>
  )
}

export default AuthHeader;
