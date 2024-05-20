import React from 'react';
import '../css/event.css';

const EventPlannerComponent = ({ weather }) => {
    return (
        <div className="event-planner">
            <h3>Event Planner Dashboard</h3>
            <p>Upcoming 10-day forecast</p>
            {/* Dummy data for forecast */}
            <ul>
                <li>Day 1: {weather.main.temp}°C - {weather.weather[0].description}</li>
                <li>Day 2: {weather.main.temp}°C - {weather.weather[0].description}</li>
                <li>Day 3: {weather.main.temp}°C - {weather.weather[0].description}</li>
                {/* Add more days as needed */}
            </ul>
            <p>Set custom weather alerts for your events.</p>
        </div>
    );
};

export default EventPlannerComponent;
