import React from 'react';
import classes from './Store.css';
import StoreList from '../Store/StoreList/StoreList';
import StoreFilters from './StoreFilters/StoreFilters';

const Store = (props) => {
    return (
        <div className={classes.storeBox}>
            <StoreFilters stores={props.stores} filterStoreHandler={props.filterStoreHandler} selectedFilter={props.selectedFilter} />
            <StoreList stores={props.stores} filterValue={props.filterValue} />
        </div>
    )
}

export default Store;