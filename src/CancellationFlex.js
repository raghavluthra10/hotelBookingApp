import Switch from '@material-ui/core/Switch';
import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import './CancellationFlex.css';
import { SearchContext } from './contextSearch/SearchState';

const CancellationFlex = (props) => {

    const [ info, setInfo ] = useContext(SearchContext)


    const clearCancellation = (e) => {
        e.preventDefault();
    }

    

    return (
        <div className='cancellationFlex'>
            <div className='cancellationFlex__top'>
                <p>
                    Only show stays that offer cancellation flexibility
                </p>
            </div>
           
            <div className='cancellationFlex__buttons'>
                <Button onClick={clearCancellation}> Clear </Button>
                <Button onClick={() => props.filterListFOrCancellation()} > Save </Button>
            </div>


        </div>
    )
}

export default CancellationFlex
