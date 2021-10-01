import React from "react";
import style from './friend.module.scss';
import PropTypes from "prop-types";

const FriendList=({friends}) => {

    return (
        <ul className={style.friendList}>
            {friends.map(({avatar,name,isOnline,id}) => (
                <li key={id} className={style.item}>
                    {/*{isOnline ? <span className={style.statusOnline}></span> : <span className={style.statusOffline}></span>}*/}
                    <span className={style.status} style={isOnline?{backgroundColor:"green"}:{backgroundColor:"red"}}></span>
                    <img className="avatar" src={avatar} alt={name} width="48"/>
                    <p className="name">{name}</p>
                </li>
            ))}
        </ul>
    )
}

FriendList.defaultProps = {
    isOnline:'',
}

FriendList.propTypes= {
    friends:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        avatar:PropTypes.string.isRequired,
        isOnline:PropTypes.bool.isRequired,
        name:PropTypes.string.isRequired
    })).isRequired,
}

export default FriendList;