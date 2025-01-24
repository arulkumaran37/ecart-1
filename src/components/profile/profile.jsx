import React, { useContext } from 'react';
import { StoreContext } from '../../context/storecontext';
import './profile.css';

const Profile = () => {
    const { user } = useContext(StoreContext);

    return (
        <div className="profile">
            <h1>Profile</h1>
            {user ? (
                <div className="profile-details">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
            ) : (
                <p>Please log in to view your profile.</p>
            )}
        </div>
    );
};

export default Profile;
