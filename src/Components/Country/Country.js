import React from 'react';
import { Link } from 'react-router-dom';
import "./Country.css"
const Country = (props) => {
    const {name,capital,flag}= props.country;
    return (
        <div className="country">
            <img style={{width: '100%', height: '300px'}} src={flag} alt="images"/>
            <h3>Name : {name}</h3>
            <h3>Capital : {capital}</h3>
            <Link to={`countryDetails/${name}`}><button>More Of {name}</button></Link>
        </div>
    );
};

export default Country;