import React from 'react'

import './header.scss';

import logo from '../../assets/images/icons/Logo.svg';

function Header() {
  return (
    <header className='header _container'>
        <div className='header__container'>

          <div className='logo'>
            <div className='logo__img'>
              <a href="."><img src={logo} alt='logo' /></a>
            </div>
          </div>

          <div className='header__btns-container'>
            <a href="#getMethod"><button className='button'>Users</button></a>
            <a href="#postMethod"><button className='button'>Sing up</button></a>
          </div>

        </div>
      </header>
  )
}

export default Header;