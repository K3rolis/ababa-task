import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';
import styles from './Navigation.module.css';
import Container from '../container/Container';
import { LinkButton } from '../buttons/Buttons';
import classes from '../buttons/Buttons.module.css';

const Navigation = () => {
  const { auth, setAuth } = useContext(LoginContext);

  const handleLogout = () => {
    setAuth({
      username: '',
      isLoggedIn: false,
    });
  };

  return (
    <div className={styles.background}>
      <Container>
        <div className={styles.navbar}>
          <div className={styles.logo}>Kerolis</div>
          <div className={styles.navbarGap}>
            <NavLink to={'/'}> Home</NavLink>
            <NavLink to={'/movies/create'}> Movies</NavLink>
          </div>

          {!auth.isLoggedIn ? (
            <div className={styles.navbarGap}>
              <LinkButton className={classes.link}>
                <NavLink to={'/login'}> Sign in</NavLink>
              </LinkButton>
              <LinkButton className={classes.outline}>
                <NavLink to={'/register'}> Sign up</NavLink>
              </LinkButton>
            </div>
          ) : (
            <div>
              <span>{auth.username}</span>
              <button className={`${classes.linkButton} ${classes.link}`} onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}

          {/* <NavLink to={'/register'}> Sign up</NavLink>
        <NavLink to={'/login'}> Sign in</NavLink> */}
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
