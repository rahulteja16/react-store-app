import React from 'react';
import StoreList from '../Store/StoreList/StoreList';
import StoreFilters from './StoreFilters/StoreFilters';
import Aux from '../../hoc/Auxx/Aux';

const Store = (props) => {

    return (
        <Aux>
            <StoreFilters stores={props.stores} filterStoreHandler={props.filterStoreHandler} />
            <StoreList stores={props.stores} />
        </Aux>
    )
}

export default Store;