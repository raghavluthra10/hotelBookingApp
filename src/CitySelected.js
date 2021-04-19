import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './CitySelected.css';

const CitySelected = (props) => {

   
    const [ cityName, setCityName ] = useState('');
  
    const chooseCity = (e) => {
        e.preventDefault();
        
        setCityName(e.target.textContent)
        // setSelectCity(!selectCity)
        // console.log(cityName)        
    };

   

   
    return (
        <div  className='citySelected'>
            <ul className='citySelected__ul' >
                <li  onClick={chooseCity} >
                    Mumbai
                </li>

                <li onClick={chooseCity}>
                    Delhi NCR
                </li>

                <li onClick={chooseCity}>
                    KolKata
                </li>

                <li onClick={chooseCity}>
                    Banglore
                </li>

                <li onClick={chooseCity}>
                    Punjab
                </li>

                <li onClick={chooseCity}>
                    Assam
                </li>

                <li onClick={chooseCity}>
                    Kerela
                </li>

                <li onClick={chooseCity}>
                    Rajasthan
                </li>
            </ul>

            <Button onClick={() => props.cityChosen(cityName)} variant='outlined'>
                Search
            </Button>

            <Button onClick={() => setCityName('')} variant='outlined'>
                clear
            </Button>

        </div>
    )
}

export default CitySelected


{/* <Menu
            />

            <MenuItem onClick={chooseCity} value='Mumbai' >Mumbai</MenuItem>
            <MenuItem onClick={chooseCity} value='Delhi NCR' > Delhi NCR </MenuItem>
            <MenuItem onClick={chooseCity} value='Goa' > Goa </MenuItem> */}