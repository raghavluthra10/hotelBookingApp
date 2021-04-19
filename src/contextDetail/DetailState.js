import React, { useState } from 'react';
import DetailContext from './detailContext';


const DetailState = ({ children }) => {

    const [ singleDetail, setSingleDetail ] = useState()

  return(
    <>
        <DetailContext.Provider value={[ singleDetail, setSingleDetail ]}>
            {children}
        </DetailContext.Provider>
    </>
)
}

export default DetailState;
export { DetailContext };