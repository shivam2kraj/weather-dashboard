import React from 'react';
import '../css/traveller.css';

const TravelerComponent = ({ weather }) => {
    return (
        <div className="traveler">
            <h3>Traveler Dashboard</h3>
            <p>Destination: {weather.name}</p>
            <p>Current Weather: {weather.main.temp}°C - {weather.weather[0].description}</p>
            <p>Packing Suggestions: Bring a light jacket and sunglasses.</p>
        </div>
    );
};

export default TravelerComponent;
