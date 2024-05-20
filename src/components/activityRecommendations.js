
import React from 'react';
import '../css/activity.css'

const ActivityRecommendations = ({ weather }) => {
    const getActivity = () => {
        if (weather.weather[0].main === 'Clear') {
            return 'It\'s a sunny day! How about a hike or a picnic?';
        } else if (weather.weather[0].main === 'Rain') {
            return 'It\'s raining. Maybe visit a museum or watch a movie indoors.';
        } else {
            return 'Check the weather details for suitable activities.';
        }
    };

    return (
        <div className="activity-recommendations">
            <h3>Activity Recommendations</h3>
            <p>{getActivity()}</p>
        </div>
    );
};

export default ActivityRecommendations;
