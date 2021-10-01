import React from "react";
import Stats from "../Stats/Stats";
import profileUser from '../../user.json';
import PropTypes from 'prop-types';
import styles from './profile.module.scss';
import defaultImage from '../../default-image.png';

const Profile = ({name,tag,location,avatar}) => {
    const {stats:{followers,views,likes}} = profileUser;
    return (
        <div className={styles.profile}>
            <div className="description">
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={styles.avatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
<Stats followers={followers} likes={likes} views={views}/>
        </div>
    )

}
Profile.defaultProps = {
    name:'Lora',
    avatar:defaultImage
}

Profile.propTypes= {
    name:PropTypes.string.isRequired,
    tag:PropTypes.string,
    location:PropTypes.string

}

export default Profile;