import React from "react";
import PropTypes from 'prop-types';
import StatisticalList from '../StatisticalList'
import style from './statistical.module.scss'


const Statistical=({title,statistical}) => (
    <section className={style.statistics}>
        {title && <h2 className={style.title}>{title.toLocaleUpperCase()}</h2>}
        <ul className={style.statList}>
            {statistical.map(({id,label,percentage,color}) => (


                <li key={id} className={style.item} style={{backgroundColor:color}}>
              <StatisticalList  label={label} percentage={percentage}/>
                </li>
            ))
            }


        </ul>
    </section>
)



Statistical.defaultProps = {
    title:'',
}

Statistical.propTypes= {
    title:PropTypes.string,
    statistical:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
        label:PropTypes.string.isRequired,
        percentage:PropTypes.number.isRequired,
        color:PropTypes.string.isRequired
    })).isRequired,
}

export default Statistical;