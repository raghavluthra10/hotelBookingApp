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
    
    // filtered array
    const [ filteredArray, setFilteredArray ] = useState([])
    
    useEffect(() => {
        setFilteredArray(info)
    }, [])

    
    // show/hide price slider
    const [ showSlider, setShowSlider ] = useState(false);
   
    const filterByPrice = (slider) => {
        
        console.log(slider[0])
        const priceFill = info.filter((priceRange) => {
            return priceRange.price.rate > slider[0] && priceRange.price.rate < slider[1]
        })

        setFilteredArray(priceFill)
    }

    //apply cancellation filter
    const [ cancelFlex, setCancelFlex ] = useState(false);

    const filterListFOrCancellation = e => {
        const filterByCancellation = info.filter((cancel) => {
            return cancel.cancellation === true
        })

        setFilteredArray(filterByCancellation)
    }

    // remove cancellation filter
    const clearCancellation = e => {
        setFilteredArray(info)
    }


    //select city
    const [ selectCity, setSelectCity ] = useState(false);
    
    const filterNone = (none) => {
            setFilteredArray(info)
    }

    const filterForMumbai = mumbai => {
        const mumbaiFilteredArray = info.filter((bombay) => {
            return bombay.location === 'Mumbai'
        })
        mumbai ? setFilteredArray(mumbaiFilteredArray) : setFilteredArray(info)
    }

    const filterForDelhi = delhi => {
        const delhiFilteredArray = info.filter((delhi) => {
            return delhi.location === 'Delhi NCR'
        })
        delhi ? setFilteredArray(delhiFilteredArray) : setFilteredArray(info)
    }

    const filterForKolkata = kolkata => {
        const kolkataFilteredArray = info.filter((kolkata) => {
            return kolkata.location === 'Kolkata'
        })
        kolkata ? setFilteredArray(kolkataFilteredArray) : setFilteredArray(info)
    }

    const filterForBanglore = banglore => {
        const bangloreFilteredArray = info.filter((banglore) => {
            return banglore.location === 'Banglore'
        })
        banglore ? setFilteredArray(bangloreFilteredArray) : setFilteredArray(info)
    }

    const filterForPunjab = punjab => {
        const punjabFilteredArray = info.filter((punjab) => {
            return punjab.location === 'Punjab'
        })
        punjab ? setFilteredArray(punjabFilteredArray) : setFilteredArray(info)
    }

    const filterForAssam = assam => {
        const assamFilteredArray = info.filter((assam) => {
            return assam.location === 'Assam'
        })
        assam ? setFilteredArray(assamFilteredArray) : setFilteredArray(info)
    }

    const filterForKerela = kerela => {
        const kerelaFilteredArray = info.filter((kerela) => {
            return kerela.location === 'Kerela'
        })
        kerela ? setFilteredArray(kerelaFilteredArray) : setFilteredArray(info)
    }

    const filterForGoa = goa => {
        const goaFilteredArray = info.filter((goa) => {
            return goa.location === 'Goa'
        })
        goa ? setFilteredArray(goaFilteredArray) : setFilteredArray(info)
    }

    const filterForRajasthan = rajasthan => {
        const rajasthanFilteredArray = info.filter((rajasthan) => {
            return rajasthan.location === 'Rajasthan'
        })
        rajasthan ? setFilteredArray(rajasthanFilteredArray) : setFilteredArray(info)
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
                {cancelFlex && <CancellationFlex  clearCancellation={clearCancellation} filterListFOrCancellation={filterListFOrCancellation} />}

                <Button onClick={() => setSelectCity(!selectCity)} variant='outlined' className={selectCity && `searchPage__citySelected`} >
                    City
                </Button>
                {selectCity && <CitySelected 
                setSelectCity={setSelectCity}  
                filterNone={none => filterNone(none)} 
                selectCity={selectCity} 
                mumbai={mumbai => filterForMumbai(mumbai)}
                delhi={delhi => filterForDelhi(delhi)}
                kolkata={kolkata => filterForKolkata(kolkata)}
                banglore={banglore => filterForBanglore(banglore)}
                punjab={punjab => filterForPunjab(punjab)}
                assam={assam => filterForAssam(assam)}
                kerela={kerela => filterForKerela(kerela)}
                goa={goa => filterForGoa(goa)}
                rajasthan={rajasthan => filterForRajasthan(rajasthan)}
                />}

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