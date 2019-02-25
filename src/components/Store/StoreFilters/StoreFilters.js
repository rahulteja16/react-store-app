import React from 'react';
import Filter from '../../UI/Filter/FIlter';
import classes from './StoreFilters.css';

const StoreFilters = (props) => {
    console.log(props.selectedFilter)

    let filtersArr = [];
    let filterEle;

    if (props.stores.length > 0) {
        props.stores.map((store) => {
            for (let val of store.tags) {
                filtersArr.push(val)
            }
        })

        filtersArr = [...new Set(filtersArr)];
        filterEle = filtersArr.map((filterValue, index) => { return <Filter value={filterValue} filterStores={() => props.filterStoreHandler(filterValue)} key={index} selected={props.selectedFilter} /> })
    };

    return (
        <div className={classes.filters}>
            <i className="fa fa-filter"></i>
            {filterEle}
            <span onClick={() => props.filterStoreHandler('clear all')}><i className="fa fa-times" aria-hidden="true"></i></span>
        </div>
    )
}

export default StoreFilters;