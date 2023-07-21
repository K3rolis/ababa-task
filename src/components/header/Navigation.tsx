import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginContext';

const Navigation = () => {
  const { auth } = useContext(LoginContext);

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {auth.username && <h1>{auth.username}</h1>}

      <NavLink to={'/'}> Home</NavLink>
      <NavLink to={'/movies/create'}> Movies</NavLink>
      <NavLink to={'/register'}> Register</NavLink>
      <NavLink to={'/login'}> Login</NavLink>
    </div>
  );
};

export default Navigation;
