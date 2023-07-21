import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <NavLink to={'/'}> Home</NavLink>
      <NavLink to={'/movies/create'}> Movies</NavLink>
      <NavLink to={'/register'}> Register</NavLink>
      <NavLink to={'/login'}> Login</NavLink>
    </div>
  );
};

export default Navigation;
