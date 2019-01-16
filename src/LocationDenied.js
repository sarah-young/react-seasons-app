import './LocationDenied.css';
import React from 'react';



const LocationDenied = (props) => {
    return (
        <div className="location-denied">
        <div className="inline-stuff">
        <i className="massive hand point right icon"></i>
        <h1>{props.message}</h1>
        <i className="massive hand point left icon"></i>
        </div>
        <div>Please allow our site to know your location to continue. </div>
    </div>
    )
}

export default LocationDenied;


