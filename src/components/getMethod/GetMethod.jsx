import React, { useState, useEffect } from 'react';
import AbzAgencyService from '../../services/AbzAgencyService';

import './getMethod.scss';

function GetMethod() {

  const [userList, setUserList] = useState([]);
  const [offset, setOffset] = useState(6);
  const [userEnded, setUserEnded] = useState(false);

  const abzAgencyService = new AbzAgencyService();

  useEffect(() => {

    getUserList();

  }, [])

  const onUserListLoaded = (newUserList) => {

    if (newUserList.length === 89) {
      setUserEnded(true);
    }

    setUserList(newUserList);
    setOffset(offset => offset + 6);
  }

  const getUserList = (offset) => {
    abzAgencyService
      .getAllUsers(offset)
      .then(onUserListLoaded)
      .catch(error => console.log(error))
  }

  const addDefaultSrc = (e) => {
    e.currentTarget.src = require('../../assets/images/photo-cover.svg').default ;
  }

  function renderUserList(arr) {
    const userListItems = arr.map(item => {
      return (
        <article key={item.id} className='user-card'>
          <div className='user-card__photo'>
            <img
              src={item.photo}
              alt="user"
              onError={(e) => addDefaultSrc(e)} />
          </div>
          <div className='user-card__name'>
            <span title={item.name} >{item.name}</span>
          </div>
          <div className='user-card__profession'>
            <span title={item.position}>{item.position}</span>
          </div>
          <div className='user-card__email'>
            <span title={item.email}>{item.email}</span>
          </div>
          <div className='user-card__phone'>
            <span title={item.phone}>{item.phone}</span>
          </div>
        </article>
      )
    })

    return (
      <div className='get-method__content'>
        {userListItems}
      </div>
    )
  }

  const userListItems = renderUserList(userList);

  return (
    <section className='get-method _container'>
      <span className='heading'>Working with GET request</span>

      {userListItems}

      <button
        className='button button_show-more'
        style={{ 'display': userEnded ? 'none' : 'inline-block' }}
        onClick={() => getUserList(offset)}>
        Show more
      </button>

    </section>
  )
}

export default GetMethod