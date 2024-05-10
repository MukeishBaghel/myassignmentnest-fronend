import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Profile = () => {
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    return (
        <div ><h1>Profile</h1>
            <button onClick={() => navigate(location.state)}>go to home</button>
        </div>
    )
}

export default Profile