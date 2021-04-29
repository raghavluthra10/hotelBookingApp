import { Button } from '@material-ui/core';
import React, { useState, useContext, useEffect } from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';
import { SearchContext } from './contextSearch/SearchState';
import Slider from '@material-ui/core/Slider';
import PriceSlider from './PriceSlider';
import { ContactMailSharp } from '@material-ui/icons';

const SearchPage = (props) => {

    // context api
    const [  info, setInfo  ] = useContext(SearchContext);
    
    // filtered array
    const [ filteredArray, setFilteredArray ] = useState([])
    
    useEffect(() => {
        setFilteredArray(info)
        console.log(filteredArray)
    }, [])

    
    // show/hide price slider
    const [ showSlider, setShowSlider ] = useState(false);
   
    const filterByPrice = (slider) => {
        
        console.log(slider[0], slider[1])
        const priceFill = info.filter((priceRange) => {
            return priceRange.price.rate > slider[0] && priceRange.price.rate < slider[1]
        })
        console.log(priceFill)
        setFilteredArray(priceFill)
    }


    return (
        <div className='searchPage' >
            <div className='searchPage__info'>
                
                <h1>
                    Stays nearby
                </h1>

                <Button variant='outlined' onClick={() => setShowSlider(!showSlider)} className={showSlider && `searchPage__priceSelected`} >
                    Price
                </Button>
                {showSlider && <PriceSlider filterByPrice={slider => filterByPrice(slider)} />}
                
            </div>

            
            {filteredArray.map((info) => (
                <SearchResult  
                img={info.img}
                location={info.location}
                title={info.title}
                description={info.description}
                star={info.star}
                price={info.price.rate}
                time={info.price.time}
                total={info.total}
                cancellation={info.cancellation}
                guests={info.guests}
                key={info.id}
                />
            ))}


        
        </div>
    )
}

export default SearchPage


// bring in filters from context indovisually and loop over them in their component
