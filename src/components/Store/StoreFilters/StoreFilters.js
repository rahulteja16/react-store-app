import React from 'react';
import Filter from '../../UI/Filter/FIlter';
import classes from './StoreFilters.css';

const StoreFilters = (props) => {

    let filtersArr = [];
    let filterEle;

    if (props.stores.length > 0) {
        props.stores.map((store) => {
            for (let val of store.tags) {
                filtersArr.push(val)
            }
        })

        filtersArr = [...new Set(filtersArr)];

        filterEle = filtersArr.map((filterValue, index) => { return <Filter value={filterValue} filterStores={() => props.filterStoreHandler(filterValue)} key={index} /> })
    };

    return (
        <div className={classes.filters}>{filterEle}</div>
    )
}

export default StoreFilters;