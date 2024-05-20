import React from 'react';
import '../css/farmer.css';

const FarmerComponent = ({ weather }) => {
    return (
        <div className="farmer">
            <h3>Farmer Dashboard</h3>
            <p>Soil Moisture: 60%</p>
            <p>Precipitation History: 10mm over the past week</p>
            <p>Seasonal Trends: Average temperature 15°C</p>
        </div>
    );
};

export default FarmerComponent;
