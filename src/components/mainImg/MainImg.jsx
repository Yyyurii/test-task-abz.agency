import React from 'react'

import './main-img.scss';

function MainImg() {
    return (
        <section className='main-img _container'>

            <div className='main-img__content'>
                <span className='main-img__title heading'>Test assignment for front-end developer</span>
                <span className='main-img__text'>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</span>

                <a href="#postMethod"><button className='button'>Sing up</button></a>
            </div>

        </section>
    )
}

export default MainImg