import React, { useState, useContext } from 'react';
import {SearchContext} from './contextSearch/SearchState';
import './PriceSlider.css';
import Slider from '@material-ui/core/Slider';
import { Button } from '@material-ui/core';
// import SearchPage from './SearchPage';


const PriceSlider = (props) => {

    // context api
    const [  info, setInfo  ] = useContext(SearchContext);

    const [slider, setSlider] = useState([ 1000, 5000 ]);

    // send slider as props to searchPrice

    const updateRangeVal = (e, item) => {
        e.preventDefault();

        setSlider(item)
    }

    
    const clearPriceRange = (e) => {
        e.preventDefault();

        setSlider([1000, 5000])
    }

    return (
        <div className='priceSlider'>
            <Slider  
            max={5000}
            min={1000}
            value={slider}
            onChange={updateRangeVal}
            />

            <div className='priceSlider__startEndVal'>

                <span>
                    {slider[0]} 
                </span>
                 
                <span>
                    {slider[1]} 
                </span> 
                 
            </div>

            <div className='priceSlider__buttons'>
                <Button onClick={clearPriceRange} > Clear </Button>
                <Button onClick={() => props.filterByPrice(slider)} > Save </Button>
            </div>
        </div>
    )
}

export default PriceSlider

// on click send a function to searchPage which checks the condition and filters the list