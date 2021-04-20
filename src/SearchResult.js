import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
import React, { useContext } from 'react';
import './SearchResult.css';
import { useHistory, Link } from 'react-router-dom';
import { DetailContext } from './contextDetail/DetailState';

const SearchResult = ({ time, img, location, title, description, star, price, total, guests, cancellation }) => {

    const [ singleDetail, setSingleDetail ] = useContext(DetailContext);

    const history = useHistory();

    const navToFullInfo = (e) => {
        e.preventDefault();

        setSingleDetail({
            img: {img},
            location: {location},
            title: {title} ,
            description: {description},
            star: {star},
            price: {price},
            total: {total},
            guests: {guests},
            cancellation: {cancellation}
        })
        
        console.log(singleDetail)

        history.push('/fullInfo')

    }

    return (
        <>
           
                <div onClick={navToFullInfo} className='searchResult'>
                    <img src={img} alt='' />
                    <FavoriteBorderIcon  className='searchResult__heart'  />

                    <div className='searchResult__info'>
                        <div className='searchResult__infoTop'>
                            <p> {location} </p>
                            <h3> {title} </h3>
                            <p> ____ </p>
                            <p> {description} </p>
                        </div>

                        <div className='searchResult__infoBottom'>
                            <div className='searchResult__stars'>
                                <StarIcon className='searchResult__star' />
                                <strong> {star} </strong>
                            </div>
                            

                            <div className='searchResult__price'>
                                <h2> {price} {time}</h2>
                                <p> {total} </p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default SearchResult
