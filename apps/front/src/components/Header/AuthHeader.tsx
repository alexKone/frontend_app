import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './auth-header.module.scss';
import ROUTES from '../../routes';

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
        { pageName ? <Link to="/auth/register">inscription</Link> : <Link to="/auth/login">connection</Link> }
      </div>
    </header>
  )
}

export default AuthHeader;
