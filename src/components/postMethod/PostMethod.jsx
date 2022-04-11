import React, { useState, useEffect } from 'react';
import AbzAgencyService from '../../services/AbzAgencyService';

import './postMethod.scss';

function PostMethod() {

    const [positions, setPosition] = useState([]);

    useEffect(() => {
        getPositionsForCheckbox();
    }, [])

    const abzAgencyService = new AbzAgencyService();

    const onPositionLoaded = (newPosition) => {
        setPosition(positions => positions = newPosition.positions)
    }

    const getPositionsForCheckbox = (offset) => {
        abzAgencyService
            .getPositions(offset)
            .then(onPositionLoaded)
            .catch(error => console.log(error))
    }

    function renderPosition(arr) {
        const positionsItems = arr.map((item, i) => {
            return (
                <div key={item.id}>
                    <input type='radio' id={item.name} name='position' defaultChecked={i === 0 ? true : false} />
                    <label htmlFor={item.name}>{item.name}</label>
                </div>
            )
        })

        return (
                positionsItems
        )
    }

    const renderPositins = renderPosition(positions);

    return (
        <section className='post-method _container'>
            <span className='heading'>Working with POST request</span>

            <div className='post-method__form'>
                <form className='form'>

                    <input className='form__input-info' name='name' placeholder='Your name' />
                    <input className='form__input-info' name='email' placeholder='Email' />
                    <input className='form__input-info' name='phone' placeholder='Phone' />

                    <div className='form__checkbox-container'>
                        <p>Select your position</p>

                        {renderPositins}

                    </div>

                    <div className='form__upload'>
                        <button className=''>Upload</button>
                        <input className='' name='upload' placeholder='Upload ypur photo' />
                    </div>

                    <button className='form__btn-singUp button button_disabled'>Sing up</button>

                </form>
            </div>

        </section>
    )
}

export default PostMethod