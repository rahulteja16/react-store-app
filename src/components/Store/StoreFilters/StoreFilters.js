import React from 'react';
import Filter from '../../UI/Filter/FIlter';
import classes from './StoreFilters.css';

const StoreFilters = (props) => {
    console.log(props)

    let filtersArr = [];
    let classesArr = [];
    let filterEle;
    let closedCounter = 0;

    if (props.stores.length > 0) {
        props.stores.map((store) => {
            if (!store.isOpen) closedCounter += 1;
            for (let val of store.tags) {
                filtersArr.push(val)
            }
        })

        filtersArr = [...new Set(filtersArr)];
    };
    if (closedCounter === props.stores.length) {
        classesArr = [classes.filters, classes.remove];
        filterEle = <div>All stores are closed.</div>;
    } else {
        filterEle = filtersArr.map((filterValue, index) => { return <Filter value={filterValue} filterStores={() => props.filterStoreHandler(filterValue)} key={index} selected={props.selectedFilter} /> })
        classesArr = [classes.filters];
    }

    return (
        <div className={classesArr.join(' ')}>
            <i className="fa fa-filter"></i>
            {filterEle}
            <span onClick={() => props.filterStoreHandler('clear all')}><i className="fa fa-times" aria-hidden="true"></i></span>
        </div>
    )
}

export default StoreFilters;