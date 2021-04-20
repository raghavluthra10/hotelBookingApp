import { Button } from '@material-ui/core';
import { set } from 'date-fns';
import React, { useContext, useState } from 'react';
import './CitySelected.css';
import { SearchContext } from './contextSearch/SearchState';

const CitySelected = (props) => {

    const [ info, setInfo ] = useContext(SearchContext);

    // state for handling true false of the checkbox
    const [ fill1, setFill1 ] = useState(true);

    const mumbai = e => {
        setFill1(!fill1)
        props.mumbai(fill1)
    }


    const [ fill2, setFill2 ] = useState(true);

    const delhi = e => {
        setFill2(!fill2)
        props.delhi(fill2)
    }

    const [ fill3, setFill3 ] = useState(true);

    const kolkata = e => {
        setFill3(!fill3)
        props.kolkata(fill3)
    }

    const [ fill4, setFill4 ] = useState(true);

    const banglore = e => {
        setFill4(!fill4)
        props.banglore(fill4)
    }

    const [ fill5, setFill5 ] = useState(true);

    const punjab = e => {
        setFill5(!fill5)
        props.punjab(fill5)
    }

    const [ fill6, setFill6 ] = useState(true);

    const assam = e => {
        setFill6(!fill6)
        props.assam(fill6)
    }

    const [ fill7, setFill7 ] = useState(true);

    const kerela = e => {
        setFill7(!fill7)
        props.kerela(fill7)
    }

    const [ fill8, setFill8 ] = useState(true);

    const goa = e => {
        setFill8(!fill8)
        props.goa(fill8)
    }

    const [ fill9, setFill9 ] = useState(true);

    const rajasthan = e => {
        setFill9(!fill9)
        props.rajasthan(fill9)
    }
    
    

   
    return (
        <div  className='citySelected'>
            <form className='citySelected__form' >
                
                <div>
                    <input onClick={(e) =>  props.filterNone(e.target.name)}  defaultChecked='true' type='checkbox'  name='All' /> 
                    <label for='All'> All </label>
                </div> 

                <div>
                    <input onClick={mumbai}  type='checkbox'  name='Mumbai' /> 
                    <label for='Mumbai'> Mumbai </label>
                </div>        
        
                <div>
                    <input onClick={delhi} type='checkbox'  name='Delhi NCR' /> 
                    <label for='Delhi NCR'> Delhi NCR </label>
                </div>
                
                <div>
                    <input onClick={kolkata} type='checkbox'  name='Kolkata' /> 
                    <label for='Kolkata'> Kolkata </label>
                </div>
            
                <div>
                    <input onClick={banglore} type='checkbox'  name='Banglore' /> 
                    <label for='Banglore'> Banglore </label>
                </div>
                
                <div>
                    <input onClick={punjab} type='checkbox'  name='Punjab' /> 
                    <label for='Punjab'> Punjab </label>
                </div>
            
                <div>
                    <input onClick={assam} type='checkbox'  name='Assam' /> 
                    <label for='Assam'> Assam </label>
                </div>
        
                <div>
                    <input onClick={kerela} type='checkbox'  name='Kerela' /> 
                    <label for='Kerela'> Kerela </label>
                </div>
            
                <div>
                    <input onClick={goa} type='checkbox'  name='Goa' /> 
                    <label for='Goa'> Goa </label>
                </div>

                <div>
                    <input onClick={rajasthan} type='checkbox'  name='Rajasthan' /> 
                    <label for='Rajasthan'> Rajasthan </label>
                </div>
                               
            </form>

        </div>
    )
}

export default CitySelected

