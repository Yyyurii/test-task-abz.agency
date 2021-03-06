import React, { useState, useEffect } from 'react';
import AbzAgencyService from '../../services/AbzAgencyService';

import Preloader from '../preloader/Preloader';
import ErrorMessage from '../errorMessage/ErrorMessage'

import './getMethod.scss';

function GetMethod() {

  const [userList, setUserList] = useState([]);
  const [offset, setOffset] = useState(6);
  const [page, setPage] = useState(1);
  const [userEnded, setUserEnded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const abzAgencyService = new AbzAgencyService();

  useEffect(() => {
    getUserList(offset, page);
  }, [])

  const onUserListLoaded = (newUserList) => {
    setUserList(userList => [...userList, ...newUserList]);
    
    setLoading(false);
    setPage(page => page + 1);
  }

  const onUserLoading = () => {
    setLoading(true);
  }

  const onError = () => {
    setLoading(false);
    setError(true);
  }

  const getUserList = (offset, page) => {
    onUserLoading();
    abzAgencyService
      .getAllUsers(offset, page)
      .then(onUserListLoaded)
      .catch(onError)
  }

  const addDefaultSrc = (e) => {
    e.currentTarget.src = require('../../assets/images/photo-cover.svg').default;
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
  const preloader = loading ? <Preloader /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const content = !(loading || error) ? userListItems : null;

  return (
    <section id='getMethod' className='get-method _container'>
      <span className='heading'>Working with GET request</span>

      {content}
      {errorMessage}
      {preloader}

      <button
        className='button button_show-more'
        style={{ 'display': userEnded ? 'none' : 'inline-block' }}
        onClick={() => getUserList(offset, page)}>
        Show more
      </button>

    </section>
  )
}

export default GetMethod