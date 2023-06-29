import React, { useState } from 'react'
import '../Profile/Profile.css'
import Header from '../../components/Header/Header'
import ProfileSidebar from '../../components/ProfileSidebar/ProfileSidebar'
import ProfileContent from '../../components/ProfileContent/ProfileContent'

const Profile = () => {
    const [active, setActive] = useState(1);
  return (
    <div>
        <Header />
        <div className="profile-main">
            <div className="profile-sidebar">
                <ProfileSidebar active={active} setActive={setActive}/>
            </div>
            <ProfileContent active={active}/>
        </div>
    </div>
  )
}

export default Profile