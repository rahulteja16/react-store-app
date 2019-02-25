import React from 'react';
import classes from './StoreItem.css';
import { checkShopAvailability } from '../../../../utils';

const StoreItem = (props) => {

    let tagVal;
    let classesArr = [classes.box];

    if (props.tags.length > 0) {
        tagVal = <p className={classes.tags}><i className="fa fa-tags" aria-hidden="true"></i> {props.tags.join(' , ')}</p>
    }

    if (!props.isOpen) {
        classesArr = [classes.box, classes.closed];
    } else {
        classesArr = [classes.box];
    }

    return (
        <div className={classesArr.join(' ')}>
            <h3 className={classes.heading}>{props.name}</h3>
            {tagVal}
            <p className={classes.desc}>{props.desc}</p>
            <p className={classes.msg}><i className="fa fa-shopping-cart"></i> {props.availablityMsg}</p>

        </div>
    )
}

export default StoreItem;