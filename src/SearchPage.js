import { Button } from '@material-ui/core';
import React, { useState, useContext, useEffect } from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';
import { SearchContext } from './contextSearch/SearchState';
import Slider from '@material-ui/core/Slider';
import PriceSlider from './PriceSlider';
import CancellationFlex from './CancellationFlex';
import CitySelected from './CitySelected';
import RoomsAndBeds from './RoomsAndBeds';
import { ContactMailSharp } from '@material-ui/icons';

const SearchPage = (props) => {

    // context api
    const [  info, setInfo  ] = useContext(SearchContext);

    // add useEffect and on every click on reRender State. it should map again
    const [ render, setRender ] = useState(false)
    
    // show/hide price slider
    const [ showSlider, setShowSlider ] = useState(false);
   
    const filterByPrice = (slider) => {
        
    }

    //cancellation flexibility
    const [ cancelFlex, setCancelFlex ] = useState(false);

    const filterListFOrCancellation = e => {
    
    }

    const filterByCancellation = info.filter((cancel) => {
        return cancel.cancellation === true;
    })

    //select city
    const [ selectCity, setSelectCity ] = useState(false);
    

    const cityChosen = (cityName) => {

        const fill = info.filter((city) => {
            return cityName == city.location
        })

    }


    return (
        <div className='searchPage' >
            <div className='searchPage__info'>
                <p>
                    62 stays . 26 august to 30 august . 2 guest
                </p>
                <h1>
                    Stays nearby
                </h1>
                <Button onClick={() => setCancelFlex(!cancelFlex)} variant='outlined' className={cancelFlex && `searchPage__cancellationSelected`}  >
                    Cancellation Flexibility
                </Button>
                {cancelFlex && <CancellationFlex filterListFOrCancellation={filterListFOrCancellation} />}

                <Button onClick={() => setSelectCity(!selectCity)} variant='outlined' className={selectCity && `searchPage__citySelected`} >
                    City
                </Button>
                {selectCity && <CitySelected setSelectCity={setSelectCity} cityChosen={cityName => cityChosen(cityName)} selectCity={selectCity} />}

                <Button variant='outlined' onClick={() => setShowSlider(!showSlider)} className={showSlider && `searchPage__priceSelected`} >
                    Price
                </Button>
                {showSlider && <PriceSlider filterByPrice={slider => filterByPrice(slider)} />}
                
            </div>

            {/* {info.map((info) => (
                <SearchResult  
                img={info.img}
                location={info.location}
                title={info.title}
                description={info.description}
                star={info.star}
                price={info.price}
                total={info.total}
                cancellation={info.cancellation}
                guests={info.guests}
                key={info.id}
                />
            ))} */}

            {filterByCancellation.map((info) => (
                 <SearchResult  
                 img={info.img}
                 location={info.location}
                 title={info.title}
                 description={info.description}
                 star={info.star}
                 price={info.price}
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