import React from 'react';

const Country = (props) => {
    const {name,capital,flags}=props.country;
    return(
          <div className="country">
            <h1>Name: {name.common}</h1>
            <p>Capital: {capital} </p>
            <img src={flags.png} alt="" style={{height: '150px',width: '250px'}}/>
          </div>
       
      )
    
};

export default Country;