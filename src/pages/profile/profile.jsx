import React from 'react';
import './profile.css';

const Profile = () => {
    return (
        <div className="profile-page">
            <h1>Your Profile</h1>
            <div className="profile-details">
                <p>Name: John Doe</p>
                <p>Email: john@example.com</p>
                <button>Update Profile</button>
            </div>
        </div>
    );
};

export default Profile;
