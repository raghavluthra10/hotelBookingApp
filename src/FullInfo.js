import React, { useState, useContext } from 'react';
import { DetailContext } from './contextDetail/DetailState';
import './FullInfo.css';

const FullInfo = (props) => {

    const [ singleDetail, setSingleDetail ] = useContext(DetailContext);

    return (
        <div className='fullInfo' >
            <img src={singleDetail.img.img} alt='' className='fullInfo__image' />

            <div className='fullInfo__details'>

                <h1>
                    {singleDetail.location.location}
                </h1>

                <h6>
                    {singleDetail.title.title}  {singleDetail.description.description}
                </h6>
                

        
                <div>
                    Price: {singleDetail.price.price}
                </div>
         
              
                {singleDetail.cancellation.cancellation}  

                <div>
                    Ratings: {singleDetail.star.star}
                </div>
            </div>
            
        </div>
    )
}

export default FullInfo



// star: {star},
// price: {price},
// total: {total},
// guests: {guests},
// cancellation: {cancellation}