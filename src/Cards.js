import React from 'react';
import './Cards.css';

const Cards = ({ src, title, description, price }) => {
    return (
        <div className='cards'>
            <img src={src} alt='' />
            <div className='card__info'>
                <h2> {title} </h2>
                <h4> {description} </h4>
                <h2> {price} </h2>
            </div>
        </div>
    )
}

export default Cards
