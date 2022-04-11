import React from 'react'

import './getMethod.scss';

import userPhoto from '../../assets/images/photo-cover.svg';

function GetMethod() {
  return (
    <section className='get-method _container'>
        <span className='heading'>Working with GET request</span>

        <div className='get-method__content'>

          <article className='user-card'>
            <div className='user-card__photo'>
              <img src={userPhoto} alt="user" />
            </div>
            <div className='user-card__name'>
              <span title="Salvador StewartSalvador StewartSalvador StewartSalvador" >Salvador StewartSalvador StewartSalvador StewartSalvador </span>
            </div>
            <div className='user-card__profession'>
              <span title='Leading specialist'>Leading specialist</span>
            </div>
            <div className='user-card__email'>
              <span title='frontend_develop@gmail.com'>frontend_develop@gmail.com</span>
            </div>
            <div className='user-card__phone'>
              <span title='+38 (098) 278 44 24'>+38 (098) 278 44 24</span>
            </div>
          </article>
          <article className='user-card'>
            <div className='user-card__photo'>
              <img src={userPhoto} alt="user" />
            </div>
            <div className='user-card__name'>
              <span>Salvador Stewart</span>
            </div>
            <div className='user-card__profession'>
              <span>Leading specialist </span>
            </div>
            <div className='user-card__email'>
              <span>frontend_develop@gmail.com</span>
            </div>
            <div className='user-card__phone'>
              <span>+38 (098) 278 44 24</span>
            </div>
          </article>
          <article className='user-card'>
            <div className='user-card__photo'>
              <img src={userPhoto} alt="user" />
            </div>
            <div className='user-card__name'>
              <span>Salvador Stewart</span>
            </div>
            <div className='user-card__profession'>
              <span>Leading specialist </span>
            </div>
            <div className='user-card__email'>
              <span>frontend_develop@gmail.com</span>
            </div>
            <div className='user-card__phone'>
              <span>+38 (098) 278 44 24</span>
            </div>
          </article>
          <article className='user-card'>
            <div className='user-card__photo'>
              <img src={userPhoto} alt="user" />
            </div>
            <div className='user-card__name'>
              <span>Salvador Stewart</span>
            </div>
            <div className='user-card__profession'>
              <span>Leading specialist </span>
            </div>
            <div className='user-card__email'>
              <span>frontend_develop@gmail.com</span>
            </div>
            <div className='user-card__phone'>
              <span>+38 (098) 278 44 24</span>
            </div>
          </article>
          <article className='user-card'>
            <div className='user-card__photo'>
              <img src={userPhoto} alt="user" />
            </div>
            <div className='user-card__name'>
              <span>Salvador Stewart</span>
            </div>
            <div className='user-card__profession'>
              <span>Leading specialist </span>
            </div>
            <div className='user-card__email'>
              <span>frontend_develop@gmail.com</span>
            </div>
            <div className='user-card__phone'>
              <span>+38 (098) 278 44 24</span>
            </div>
          </article>
          <article className='user-card'>
            <div className='user-card__photo'>
              <img src={userPhoto} alt="user" />
            </div>
            <div className='user-card__name'>
              <span>Salvador Stewart</span>
            </div>
            <div className='user-card__profession'>
              <span>Leading specialist </span>
            </div>
            <div className='user-card__email'>
              <span>frontend_develop@gmail.com</span>
            </div>
            <div className='user-card__phone'>
              <span>+38 (098) 278 44 24</span>
            </div>
          </article>

        </div>
        <button className='button button_show-more'>Show more</button>

      </section>
  )
}

export default GetMethod