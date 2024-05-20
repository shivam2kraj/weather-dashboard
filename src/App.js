import React, { useState } from 'react';
import WeatherCard from './components/weatherCard';
import ActivityRecommendations from './components/activityRecommendations';
import UserGroupSelector from './components/userGroup';
import EventPlannerComponent from './components/event';
import FarmerComponent from './components/farmer';
import TravelerComponent from './components/traveller';
import { weatherData } from './data/weatherData';
import './App.css';
import './css/cloud.css';
import './css/responsive.css'

const App = () => {
    const [userGroup, setUserGroup] = useState('');

    const renderUserGroupComponent = () => {
        switch (userGroup) {
            case 'eventPlanner':
                return <EventPlannerComponent weather={weatherData} />;
            case 'farmer':
                return <FarmerComponent weather={weatherData} />;
            case 'traveler':
                return <TravelerComponent weather={weatherData} />;
            default:
                return null;
        }
    };

    return (
        <div className="app">
        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>
        <div className="content">
            <h1>Weather Dashboard</h1>
            <UserGroupSelector setUserGroup={setUserGroup} />
            <WeatherCard weather={weatherData} />
            <ActivityRecommendations weather={weatherData} />
            {renderUserGroupComponent()}
        </div>
    </div>
    );
};

export default App;
