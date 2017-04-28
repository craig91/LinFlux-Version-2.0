import React from 'react';
import {Link} from 'react-router';
import ProfileInfo from './profile_info.jsx';
import OneUser from './profile.jsx';

class ProfilePage extends React.Component {
  render() {
    return (
      <div className="profile_body">

        <div className="left-column column">
          <OneUser />
        </div>


        <div className="right-column column">
          <ProfileInfo />
        </div>

      </div>
    )
  }
}

export default ProfilePage;
