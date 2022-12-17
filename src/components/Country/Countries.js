import { useEffect, useState } from 'react';
import Country from './Country';
import "./Country.css"
function LoadCountries(){
    const [country,setCountry]= useState([]);
  
    useEffect(()=>{
      fetch("https://restcountries.com/v3.1/all")
      .then(res => res.json())
      .then(data=> setCountry(data))
    },[])
  
    return(
      <>
      <h1>Countries</h1>
    <div id="countries">
       {
        country.map(country => <Country country={country}  key={country.cca3}
        ></Country>)
       }
    </div>
    </>
    )
  }
  export default LoadCountries