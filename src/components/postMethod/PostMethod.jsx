import React, { useState, useEffect, useRef } from 'react';
import AbzAgencyService from '../../services/AbzAgencyService';

import './postMethod.scss';

function PostMethod() {

    const [positions, setPosition] = useState([]);
    const [token, setToken] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [positionId, setPositionId] = useState('1');
    const form = useRef(null);

    useEffect(() => {
        getPositionsForCheckbox();
        getToken();;
    }, [])

    const abzAgencyService = new AbzAgencyService();

    const onPositionLoaded = (newPosition) => {
        setPosition(positions => positions = newPosition.positions)
    }

    const onTokenLoaded = (newToken) => {
        setToken(token => token = newToken.token);
    }

    const getPositionsForCheckbox = (offset) => {
        abzAgencyService
            .getPositions(offset)
            .then(onPositionLoaded)
            .catch(error => console.log(error))
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
                        onChange={(e) => {setPositionId(e.target.value)}} />
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
            .then(function (response) { return response.json(); })
            .then(function (data) {
                console.log(data);
            }).catch(function (error) { 'proccess network errors' });
    };

    const validEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    const vvaa = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

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
                        onChange={(e) => {setName(e.target.value)}} />
                    <input
                        type="email"
                        className='form__input-info'
                        name='email'
                        placeholder='Email'
                        // pattern={vvaa}
                        required
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}} />
                    <input
                        type="tel"
                        className='form__input-info'
                        name='phone'
                        placeholder='Phone'
                        pattern='^[\+]{0,1}380([0-9]{9})$'
                        value={phone}
                        onChange={(e) => {setPhone(e.target.value)}} />

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

export default PostMethod