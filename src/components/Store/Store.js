import React from 'react';
import StoreList from '../Store/StoreList/StoreList';
import StoreFilters from './StoreFilters/StoreFilters';
import ODiv from '../../hoc/ODiv/ODiv';

const Store = (props) => {

    return (
        <ODiv>
            <StoreFilters stores={props.stores} filterStoreHandler={props.filterStoreHandler} />
            <StoreList stores={props.stores} />
        </ODiv>
    )
}

export default Store;