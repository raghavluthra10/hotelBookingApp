import React, { useState } from 'react';
import SearchContext from './searchContext';


const SearchState = ({ children, img, location, title, description, star, price, total, id  }) => {


    const filterListFOrCancellation = () => {
        
    }

    const [ info, setInfo ] = useState([
        {
            img: 'https://a0.muscache.com/im/pictures/324e2188-c22f-41e6-9691-9b4f84de81a9.jpg?im_w=1200',
            location:'Mumbai',
            title:'Luxury Appartment' ,
            description:'1 guest . 1 bedroom . Wifi . Kitchen . Free parking . Washing Machine',
            star:'4.73',
            price:  {
                rate: '2000',
                time: 'per night'
            },
            total:'10k total',
            guests: '2',
            cancellation: true,
            id: 1
        },
        {
            img:'https://a0.muscache.com/im/pictures/b23d2617-6b70-40b0-8d23-8594be42520f.jpg?im_w=1200',
            location:'Kolkata',
            title:' Luxury Appartment ' ,
            description:'1 guest . 1 bedroom . Wifi . Kitchen . Free parking . Washing Machine',
            star:'4.55',
            price: {
                rate: '3000',
                time: 'per night'
            },
            total:'10k total',
            guests: '2',
            cancellation: false,
            id: 2
        },
        {
            img: 'https://a0.muscache.com/im/pictures/5a818636-c3b2-43d4-b4e2-169c04c8d07e.jpg?im_w=1200',
            location: 'Delhi NCR',
            title: 'Luxury Appartment' ,
            description: '1 guest . 1 bedroom . Wifi . Kitchen . Free parking . Washing Machine',
            star: '4.88',
            price:  {
                rate: '2000',
                time: 'per night'
            },
            total: '10k total',
            guests: '2',
            cancellation: true,
            id: 3
        },
        {
            img:  'https://a0.muscache.com/im/pictures/75ee49c7-d442-4ebe-9dbd-47ac6abf62ac.jpg?im_w=1200',
            location: 'Delhi NCR',
            title:  'Luxury Appartment ' ,
            description: '1 guest . 1 bedroom . Wifi . Kitchen . Free parking . Washing Machine',
            star: '4.2',
            price:  {
                rate: '4000',
                time: 'per night'
            },
            total: '10k total',
            guests: '2',
            cancellation: true,
            id: 4
        },
        {
            img:'https://a0.muscache.com/im/pictures/0c6af968-0262-44b1-ae87-17cb8364a31c.jpg?im_w=1200',
            location:'Banglore',
            title: '  Luxury Appartment' ,
            description: '1 guest . 1 bedroom . Wifi . Kitchen . Free parking . Washing Machine',
            star: '4.2',
            price:  {
                rate: '2000',
                time: 'per night'
            },
            total: '10k total',
            guests: '2',
            cancellation: false,
            id: 5
        },
        {
            img: 'https://a0.muscache.com/im/pictures/f38143af-5288-4acb-a29f-4b77f63a463f.jpg?im_w=1200',
            location: 'Punjab',
            title: 'Luxury Appartment ' ,
            description: '1 guest . 1 bedroom . Wifi . Kitchen . Free parking . Washing Machine',
            star: '4.78',
            price:  {
                rate: '3000',
                time: 'per night'
            },
            total: '10k total',
            guests: '2',
            cancellation: false,
            id: 6
        },
        {
            img: 'https://a0.muscache.com/im/pictures/4021b93d-1642-4ca0-9759-53c31508817f.jpg?im_w=1200',
            location: 'Assam',
            title:'Luxury Appartment  ' ,
            description: '1 guest . 1 bedroom . Wifi . Kitchen . Free parking . Washing Machine',
            star: '4.5',
            price: {
                rate: '5000',
                time: 'per night'
            },
            total:'10k total',
            guests: '2',
            cancellation: true,
            id: 7
        },
        {
            img:'https://a0.muscache.com/im/pictures/dbe36a7d-fd86-4c7b-bff9-15ff64356e47.jpg?im_w=1200',
            location:'Kerela',
            title: 'Luxury Appartment ' ,
            description:'1 guest . 1 bedroom . Wifi . Kitchen . Free parking . Washing Machine',
            star: '4.9',
            price:  {
                rate: '2000',
                time: 'per night'
            },
            total: '10k total',
            guests: '2',
            cancellation: false,
            id: 8
        },
        {
            img: 'https://a0.muscache.com/im/pictures/67c36019-3acb-4366-b83a-7ec80da325d2.jpg?im_w=1200',
            location: 'Goa',
            title: 'Luxury Appartment ' ,
            description: '1 guest . 1 bedroom . Wifi . Kitchen . Free parking . Washing Machine',
            star: '4.4',
            price: {
                rate: '3000',
                time: 'per night'
            },
            total: '10k total',
            guests: '2',
            cancellation: true,
            id: 9
        },
        {
            img: 'https://a0.muscache.com/im/pictures/8242fa1c-4a83-44d8-b8fc-a008114e62d4.jpg?im_w=1200',
            location: 'Rajasthan',
            title: 'Luxury Appartment ' ,
            description: '1 guest . 1 bedroom . Wifi . Kitchen . Free parking . Washing Machine',
            star: '4.9',
            price:  {
                rate: '5000',
                time: 'per night'
            },
            total: '10k total',
            guests: '2',
            cancellation: true,
            id: 10
        }
    ]);

    return(
        <>
            <SearchContext.Provider value={[ info, setInfo ]}>
                {children}
            </SearchContext.Provider>
        </>
    )
}

export default SearchState;
export { SearchContext };