import React from 'react';
import '../css/weatherCard.css';

const WeatherCard = ({ weather }) => {
    return (
        <div className="weather-card">
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>{weather.main.temp}°C</p>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    );
};

export default WeatherCard;
