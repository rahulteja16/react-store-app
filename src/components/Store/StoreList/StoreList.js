import React from 'react';
import Classes from './StoreList.css';
import StoreItem from './StoreItem/StoreItem';
import Filter from '../../UI/Filter/FIlter';
import { sortSchedule } from '../../../utils';

const StoreList = (props) => {

	let storeEle;

	if (props.stores.length <= 0) {
		storeEle = <div>Loading</div>
	} else {

		if (props.filterValue === null || props.filterValue === 'clear all') {

			storeEle = props.stores.map((store) => {
				return <StoreItem
					key={store.id}
					name={store.name}
					desc={store.description}
					tags={store.tags}
					availablityMsg={store.availablityMsg}
					schedule={sortSchedule(store.schedule)} />;
			});
		} else {
			let newPropArr = [];

			props.stores.forEach((store) => {
				if (store.tags.includes(props.filterValue)) {
					newPropArr.push(store);
				}
			});

			storeEle = newPropArr.map((store) => {
				return <StoreItem
					key={store.id}
					name={store.name}
					desc={store.description}
					tags={store.tags}
					availablityMsg={store.availablityMsg}
					schedule={sortSchedule(store.schedule)} />;
			});
		}



	}

	return (
		<div className={Classes.shell}>
			{/* {filterEle} */}
			{storeEle}
		</div>
	)
}




export default StoreList;