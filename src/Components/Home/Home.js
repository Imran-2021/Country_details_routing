import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import "./Home.css"
const Home = () => {
    const url = "https://restcountries.eu/rest/v2/all"
    const [country,setCountry]=useState([])
    useEffect(() => {
        fetch(url)
        .then(req=>req.json())
        .then(data=>{
            setCountry(data.slice(0,200))
        })
    },[]);
    return (
        <div>
            <div style={{textAlign: 'center'}}>
                <h1>total Country - {country.length}</h1>
                <h2>here all countries</h2>
            </div>
            <div className="styleCountry">
            {
                country.map((x,as)=><Country key={as} country={x}/>)
            }
            </div>
        </div>
    );
};

export default Home;