import React from 'react';
import classes from './CategoryItem.css';
import Skeleton from 'react-loading-skeleton';


const CategoryItem = (props) => {
    let classesArr = [classes.card];

    if (props.selectedCategory === props.name) {
        classesArr = [classes.card, classes.selected];
    }
    return (
        <div className={classesArr.join(' ')} onClick={props.showStore}>
            {<img className={classes.logo} src={props.activeLogo} alt={props.label} /> || <Skeleton circle={true} height={35} width={35} />}
            {<h3 className={classes.heading}>{props.label}</h3>}
        </div>
    )
}

export default CategoryItem;