import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Store from '../../components/Store/Store';
import CategoryList from '../../components/CategoryList/CategoryList';
import ODiv from '../../hoc/ODiv/ODiv';
import { parseStoreResponse } from '../../utils';

function Shop() {
    const [categories, setCategories] = useState([]);
    const [stores, setStores] = useState([]);
    const [error, setError] = useState(false);
    const [filterValue, setFilterValue] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3000/categories')
            .then(response => {
                setCategories(response.data.categories);
                storeListHandler(response.data.categories[0].name);
            })
            .catch(error => {
                setError({ error: true })
            })
    }, []);

    function storeListHandler(val, catId) {
        axios.get(`http://localhost:3000/stores?category=${val}`)
            .then(response => {
                const { data, allUnavailable } = parseStoreResponse(response.data.stores);
                if (allUnavailable) {
                    let newCategories = categories;
                    for (let i = 0; i < categories.length; i++) {
                        if (categories[i].id == catId) {
                            newCategories[i] = Object.assign({}, { disabled: true }, newCategories[i]);
                        }
                    }
                    setCategories(newCategories);
                }
                setStores(data);
            })
            .catch(error => {
                setError({ error: true })
            })
    }

    function filterStores(stores = [], value = "") {
        return stores.filter(storeObj => storeObj.tags.includes(value));
    }

    function filterStoreHandler(val) {
        setFilterValue(val);
        // setStores(filterStores(stores, val));
    }

    return (
        <ODiv>
            <CategoryList showStore={storeListHandler} categories={categories} />
            <Store stores={stores} filterStoreHandler={filterStoreHandler} filterValue={filterValue} />
        </ODiv>
    )
}



export default Shop