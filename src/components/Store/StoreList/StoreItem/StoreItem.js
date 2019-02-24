import React from 'react';
import classes from './StoreItem.css';
import { checkShopAvailability } from '../../../../utils';

const StoreItem = (props) => {

    let tagVal;
    if (props.tags.length > 0) {
        tagVal = <p className={classes.tags}>{props.tags.join(' , ')}</p>
    }

    return (
        <div>
            <h3>{props.name}</h3>
            {tagVal}
            <p>{props.desc}</p>
            <p>{checkShopAvailability(props.schedule)}</p>
        </div>
    )
}

export default StoreItem;