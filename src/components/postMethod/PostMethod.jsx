import React, { useState, useEffect, useRef } from 'react';
import AbzAgencyService from '../../services/AbzAgencyService';

import Preloader from '../preloader/Preloader';
import ErrorMessage from '../errorMessage/ErrorMessage'
import SuccessMessage from '../successMessage/SuccessMessage.js'

import './postMethod.scss';

function PostMethod() {

    const [positions, setPosition] = useState([]);
    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [positionId, setPositionId] = useState('1');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const form = useRef(null);

    useEffect(() => {
        getPositionsForCheckbox();
        getToken();;
    }, [])

    const abzAgencyService = new AbzAgencyService();

    const onPositionLoaded = (newPosition) => {
        setPosition(newPosition.positions);
        setLoading(false);
    }

    const onTokenLoaded = (newToken) => {
        setToken(newToken.token);
    }

    const onLoading = () => {
        setLoading(true);
    }

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const getPositionsForCheckbox = (offset) => {
        onLoading();
        abzAgencyService
            .getPositions(offset)
            .then(onPositionLoaded)
            .catch(onError)
    }

    const getToken = () => {
        abzAgencyService
            .getToken()
            .then(onTokenLoaded)
            .catch(error => console.log(error))
    };

    function renderPosition(arr) {
        const positionsItems = arr.map((item, i) => {
            return (
                <div key={item.id}>
                    <input
                        required
                        type='radio'
                        id={item.name}
                        name='position'
                        defaultChecked={i === 0 ? true : false}
                        value={item.id}
                        onChange={(e) => { setPositionId(e.target.value) }} />
                    <label htmlFor={item.name}>{item.name}</label>
                </div>
            )
        })

        return (
            positionsItems
        )
    }

    const renderPositins = renderPosition(positions);

    const submit = e => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const fileField = document.querySelector('input[type="file"]');

        formData.append('position_id', positionId);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('photo', fileField.files[0]);

        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', { method: 'POST', body: formData, headers: { 'Token': token } })
            .then(function (response) {
                onLoading();
                if (response.ok) { 
                    setSuccess(true)
                    setLoading(false);
                };
                return response.json();
            })
            .catch(function (error) { alert(error) });
    };

    const sectionPostMethod = () => {
        return (
            <section className='post-method _container' >
                <span className='heading'>Working with POST request</span>

                <div className='post-method__form'>
                    <form className='form' ref={form} onSubmit={submit}>

                        <input
                            minLength='2'
                            maxLength='60'
                            className='form__input-info'
                            name='name'
                            placeholder='Your name'
                            value={name}
                            onChange={(e) => { setName(e.target.value) }} />
                        <input
                            type="email"
                            className='form__input-info'
                            name='email'
                            placeholder='Email'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />
                        <input
                            type="tel"
                            className='form__input-info'
                            name='phone'
                            placeholder='Phone'
                            pattern='^[\+]{0,1}380([0-9]{9})$'
                            value={phone}
                            onChange={(e) => { setPhone(e.target.value) }} />

                        <div className='form__checkbox-container'>
                            <p>Select your position</p>

                            {renderPositins}

                        </div>

                        <div className='form__upload'>
                            <button className=''>Upload</button>
                            <input required type='file' className='' name='upload' placeholder='Upload your photo' />
                            <label htmlFor='upload'>Upload your photo</label>
                        </div>

                        <button type='submit' className='form__btn-singUp button button_disabled'>Sing up</button>

                    </form>
                </div>

            </section>
        )
    }

    const preloader = loading ? <Preloader /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const sectionPost = !(loading || error) ? sectionPostMethod() : null;
    const content = success ? <SuccessMessage /> : sectionPost;

    const validEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    return (
        <>
            {content}
            {errorMessage}
            {preloader}
        </>
    )
}

export default PostMethod