import React from 'react';
 import { useAuth } from '../../contexts/AuthContext';
 import  styles from './Profile.module.css';

 const Profile = () => {
    const { user, logout } = useAuth();
    return (
      <div className={styles.profile}>
        <h1> Profile </h1>
        {user ? (
          <div>
            <p> Email: {user.email}</p>
            <p> Role: {user.role}</p>
            <button onClick={logout} className="btn"> Logout </button>
            </div>
        ) : (
          <p> Please log in to view profile.</p>

         )}
      </div>
    );
 };
 export default Profile;
 