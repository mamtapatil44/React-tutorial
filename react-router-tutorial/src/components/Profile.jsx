import React from 'react'
import { useParams } from 'react-router-dom';

const Profile = () => {
    const params = useParams();
    return (
      <div>
        <h1>Profile Page {params.profileId}</h1>
      </div>
    );
}

export default Profile