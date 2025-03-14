import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Profiles = () => {
    const profiles = [1, 2, 3, 4, 5];

    return (
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          {profiles.map((profile) => (
            <NavLink
              key={profile}
              to={`/profiles/${profile}`}
              className={({ isActive }) => {
                return isActive ? 'text-primary-700' : '';
              }}
            >
              Profile {profile}
            </NavLink>
          ))}
        </div>
        <Outlet />
      </div>
    );
}

export default Profiles