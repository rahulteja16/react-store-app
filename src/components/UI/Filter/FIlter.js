import React from 'react';
import classes from './Filter.css';

const Filter = (props) => {
    return (
        <div className={classes.filter} onClick={props.filterStores}>{props.value}</div>
    )
}

export default Filter