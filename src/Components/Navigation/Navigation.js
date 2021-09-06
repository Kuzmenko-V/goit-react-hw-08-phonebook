import React from 'react';
import { NavLink } from "react-router-dom";
import './Navigation.css';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const Navigation = () => {
     const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
     return ( <nav className='Navigation'>
                <NavLink exact to='/' className='navLink' activeClassName='navLinkActive'>Главная</NavLink>
                {isLoggedIn && <NavLink to='/contacts' className='navLink' activeClassName='navLinkActive'>Контакты</NavLink>}
              </nav >
            );
};

export default Navigation;