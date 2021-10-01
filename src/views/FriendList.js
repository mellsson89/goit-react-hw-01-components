import React from "react";
import FriendList from "../components/FriendList";
import friends from '../friends.json';

const FriendListView=() =>  (
    <FriendList  friends={friends}/>

)

export default FriendListView;