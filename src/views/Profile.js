import React from "react";
import Profile from "../components/Profile";
import profileUser from '../user.json';

const ProfileView=() => {
    const {name,tag,location,avatar}=profileUser;

    return (
        <Profile name={name} tag={tag} avatar={avatar} location={location} />
    )
}

export default ProfileView;