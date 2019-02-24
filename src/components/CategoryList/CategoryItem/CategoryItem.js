import React from 'react';
import classes from './CategoryItem.css';
import Skeleton from 'react-loading-skeleton';

const CategoryItem = (props) => (
    <div className={classes.card} onClick={props.showStore}>
        <img className={classes.logo} src={props.activeLogo} alt={props.label} />
        <h3 className={classes.heading}>{props.label}</h3>
    </div>
)

export default CategoryItem;