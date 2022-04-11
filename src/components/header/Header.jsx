import React from 'react'

import './header.scss';

import logo from '../../assets/images/icons/Logo.svg';

function Header() {
  return (
    <header className='header _container'>
        <div className='header__container'>

          <div className='logo'>
            <div className='logo__img'>
              <img src={logo} alt='logo' />
            </div>
          </div>

          <div className='header__btns-container'>
            <button className='button'>Users</button>
            <button className='button'>Sing up</button>
          </div>

        </div>
      </header>
  )
}

export default Header;