import { Button } from '@material-ui/core';
import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';

const SearchPage = () => {
    return (
        <div className='searchPage' >
            <div className='searchPage__info'>
                <p>
                    62 stays . 26 august to 30 august . 2 guest
                </p>
                <h1>
                    Stays nearby
                </h1>
                <Button variant='outlined' >
                    Cancellation Flexibility
                </Button>

                <Button variant='outlined' >
                    Type of place
                </Button>

                <Button variant='outlined' >
                    Price
                </Button>

                <Button variant='outlined' >
                    Rooms and beds
                </Button>

                <Button variant='outlined' >
                    More filters
                </Button>
            </div>

            <SearchResult
                img='https://a0.muscache.com/im/pictures/324e2188-c22f-41e6-9691-9b4f84de81a9.jpg?im_w=1200'
                location='Mumbai'
                title='Stay here guyss' 
                description='1 guest . 1 bedroom . Wifi . Kitchen . Free parking . Washing Machine'
                star='4.73'
                price='$30 / night'
                total='$112 total'
            />
        </div>
    )
}

export default SearchPage
