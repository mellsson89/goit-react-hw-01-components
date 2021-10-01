import React from "react";
import PropTypes from 'prop-types';
import styles from './stats.module.scss'
const Stats=({followers,views,likes}) => {
return (
    <ul className={styles.stats}>
        <li className={styles.statsList}>
            <span className="label">Followers</span>
            <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.statsList}>
            <span className="label">Views</span>
            <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.statsList}>
            <span className="label">Likes</span>
            <span className={styles.quantity}>{likes}</span>
        </li>
    </ul>

)

}

Stats.propTypes= {
    followers:PropTypes.number.isRequired,
    views:PropTypes.number.isRequired,
    likes:PropTypes.number.isRequired
}

export default Stats;
