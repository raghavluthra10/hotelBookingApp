import React from 'react';
import './Home.css';
import Banner from './Banner';
import Cards from './Cards';

const Home = () => {
    return (
        <div className='home'>

        <Banner  />

        <div className='home__section'>
            <Cards 
                src='https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480' 
                description='Spaces that are more than just a place to sleep.'
                title='Entire homes'
            />
            <Cards
                src='https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480' 
                description='Spaces that are more than just a place to sleep.'
                title='Unique stays'
            />
            <Cards  
                src='https://a0.muscache.com/im/pictures/7f254627-3922-4880-b8fa-545b8551117e.jpg?im_w=480' 
                description='Spaces that are more than just a place to sleep.'
                title='Farms and nature'
            />
        </div>

        <div className='home__section'>
            <Cards 
                src='https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=480' 
                description='Spaces that are more than just a place to sleep.'
                title='Pets allowed'
            />
            <Cards
                src='https://a0.muscache.com/im/pictures/a6b08861-feb8-4a01-a76d-b33d2867b441.jpg?im_w=480' 
                description='Spaces that are more than just a place to sleep.'
                title='Online Experiences'
            />
            <Cards  
                src='https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=480' 
                description='Spaces that are more than just a place to sleep.'
                title='Adventures'
            />
        </div>

        </div>
    )
}

export default Home
