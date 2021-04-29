import React, { useState } from 'react';
import './Search.css';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';



const Search = () => {

    const history = useHistory();
    const [ startDate, SetStartDate ] = useState(new Date());
    const [ endDate, setEndDate ] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    const handleSelect = (ranges) => {
        SetStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const searchAirbnb = () => {
        history.push('/searchPage')
    }

    return (
        <div className='search'>
            <DateRangePicker 
            ranges={[selectionRange]}
            onChange={handleSelect}
            />

            <h2>
                Number of guests
                <PeopleIcon  />
            </h2>
            <input min={0}
            defaultValue={2}
            type='number'
            />
            <Button onClick={searchAirbnb} >
                Search Airbnb
            </Button>
        </div>
    )
}

export default Search
