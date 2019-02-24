import React from 'react';
import Classes from './StoreList.css';
import StoreItem from './StoreItem/StoreItem';
import Filter from '../../UI/Filter/FIlter';
import { sortSchedule } from '../../../utils';

const StoreList = (props) => {


	let storeEle;
	let storesArr = [];



	function filterStores(stores, value) {
		return stores.filter(storeObj => storeObj.tags.includes(value));
	}

	function filterStoresHandler(val) {
		let duplicateStoreArr = props.stores.slice();
		storesArr = filterStores(props.stores, val);
		console.log(storesArr);
	}


	if (props.stores.length <= 0) {
		storeEle = <div>Loading</div>
		// filterEle = null;
	} else {

		storeEle = props.stores.map((store) => {
			return <StoreItem
				key={store.id}
				name={store.name}
				desc={store.description}
				tags={store.tags}
				schedule={sortSchedule(store.schedule)} />;
		});


	}

	return (
		<div className={Classes.shell}>
			{/* {filterEle} */}
			{storeEle}
		</div>
	)
}




export default StoreList;