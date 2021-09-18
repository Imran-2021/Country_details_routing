import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import "./CountryDetails.css"
const CountryDetails = () => {
    const {nm} = useParams()
    const url = `https://restcountries.eu/rest/v2/name/${nm}`
   const [countrY,setCountrY]= useState({})
   useEffect(()=>{
       fetch(url)
       .then(req=>req.json())
       .then(data=>setCountrY(data[0])
        );
   },[])
   console.log(countrY);
   const {name,area,capital,population,region,timezones,nativeName,numericCode,flag,}=countrY;
    return (
        <div className="countryDetails">
            <p>Country Details of  : {nm}</p>
            <img style={{width: '70%', height: '300px'}} src={flag} alt="" />
            <h3>Name : {name} && Capital : {capital}</h3>
            <h3>Area : {area} && Population : {population}</h3>
            <p>Region : {region}</p>
            <p>Timezones : {timezones}</p>
            <p>NativeName : {nativeName}</p>
            <p>numericCode : {numericCode}</p>
            <Link to="/home"><button style={{padding:"10px"}}>Back to All countries</button></Link>
        </div>
    );
};

export default CountryDetails;