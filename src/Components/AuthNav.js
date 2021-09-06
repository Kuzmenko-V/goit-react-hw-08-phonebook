import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation/Navigation.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className='navLink'
        activeClassName='navLinkActive'
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        exact
        className='navLink'
        activeClassName='navLinkActive'
      >
        Логин
      </NavLink>
    </div>
  );
}
