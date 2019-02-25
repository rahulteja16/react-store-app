import React from 'react';
import classes from './Filter.css';

const Filter = (props) => {
    let selectedClasses = [classes.filter];

    if (props.selected === props.value) {
        selectedClasses = [classes.filter, classes.selected]
    }
    return (
        <span className={selectedClasses.join(' ')} onClick={props.filterStores}>
            {props.value}
        </span>
    )
}

export default Filter