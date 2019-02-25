import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classes from './shop.css';
import Store from '../../components/Store/Store';
import CategoryList from '../../components/CategoryList/CategoryList';
import { parseStoreResponse } from '../../utils';
import Header from '../../components/UI/Header/Header';

function Shop() {
    const [categories, setCategories] = useState([]);
    const [stores, setStores] = useState([]);
    const [error, setError] = useState(false);
    const [filterValue, setFilterValue] = useState(null)
    const [selectedFilter, setSelectedFilter] = useState(null)
    const [selectedCategory, setSelectedCategory] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3000/categories')
            .then(response => {
                setCategories(response.data.categories);
            })
            .catch(error => {
                setError({ error: true })
            })
    }, []);

    useEffect(() => {
        if (categories.length > 0) {
            storeListHandler(categories[0].name, categories[0].id);
        }    
    }, [categories]);

    function storeListHandler(val, catId) {
        setSelectedCategory(val);
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

    function filterStoreHandler(val) {
        setFilterValue(val);
        setSelectedFilter(val);
    }

    return (
        <React.Fragment>
            <Header />
            <div className={classes.bodyContent}>
                <CategoryList showStore={storeListHandler} categories={categories} selectedCategory={selectedCategory} />
                <Store stores={stores} filterStoreHandler={filterStoreHandler} filterValue={filterValue} selectedFilter={selectedFilter} />
            </div>
        </React.Fragment>
    )
}



export default Shop