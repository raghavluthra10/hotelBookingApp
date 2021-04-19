import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './RoomsAndBeds.css';

const RoomsAndBeds = (props) => {

    const [ room, setRoom ] = useState('');
    const [ bed, setBed ] = useState('');

    const numberOfRooms = e => {
        e.preventDefault();

        setRoom(e.target.value);
    }

    const numberOfBeds = e => {
        e.preventDefault();

        setBed(e.target.value);
    }
  
    const clearRoomAndBeds = e => {
        e.preventDefault();

        setRoom('');
        setBed('');
    }
 
    return (
        <div>
            <form className='roomsAndBeds'>
                <label for='room' > Rooms </label>
                <input id='rooms' type='number' onChange={numberOfRooms} value={room} />

                <label for='beds' > Beds </label> 
                <input id='beds' type='number' onChange={numberOfBeds} value={bed} />

                <Button type={() => props.roomAndBedsNumber(room, bed)} variant='outlined' className='roomsAndBedsSelectButton' >
                    Select 
                </Button>
                <Button type={clearRoomAndBeds} variant='outlined' className='roomsAndBedsSelectButton' >
                    Clear 
                </Button>


               
            </form>
        </div>
    )
}

export default RoomsAndBeds
