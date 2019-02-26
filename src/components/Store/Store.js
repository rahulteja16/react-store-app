import React from 'react';
import classes from './Store.css';
import Loader from 'react-loader-spinner';

import StoreList from '../Store/StoreList/StoreList';
import StoreFilters from './StoreFilters/StoreFilters';

const Store = (props) => {

    let classesArr = [];
    let loader;

    if (props.showLoader) {
        classesArr = [classes.storeBox, classes.opacityBox];
        loader = <div className={classes.LoaderPos}>
            <Loader
                type="Puff"
                color="#FCC253"
                height="100"
                width="100"
            />
        </div>
    } else {
        classesArr = [classes.storeBox];
    }

    return (
        <div className={classesArr.join(' ')}>
            {loader}
            <StoreFilters stores={props.stores} filterStoreHandler={props.filterStoreHandler} selectedFilter={props.selectedFilter} />
            <StoreList stores={props.stores} filterValue={props.filterValue} />
        </div>
    )
}

export default Store;