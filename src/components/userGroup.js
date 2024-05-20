import React from 'react';
import '../css/userGroup.css'

const UserGroupSelector = ({ setUserGroup }) => {
    return (
        <div className="user-group-selector">
            <h3>Select Your User Group</h3>
            <button onClick={() => setUserGroup('eventPlanner')}>Event Planner</button>
            <button onClick={() => setUserGroup('farmer')}>Farmer</button>
            <button onClick={() => setUserGroup('traveler')}>Traveler</button>
        </div>
    );
};

export default UserGroupSelector;
