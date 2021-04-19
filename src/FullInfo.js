import React, { useState, useContext } from 'react';
import { DetailContext } from './contextDetail/DetailState';
import './FullInfo.css';

const FullInfo = (props) => {

    const [ singleDetail, setSingleDetail ] = useContext(DetailContext);

    return (
        <div>
            <img src={singleDetail.img.img} alt=''  />
            
        </div>
    )
}

export default FullInfo
