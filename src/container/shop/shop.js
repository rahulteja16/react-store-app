import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import classes from './shop.css';
import Store from '../../components/Store/Store';
import CategoryList from '../../components/CategoryList/CategoryList';
import ODiv from '../../hoc/ODiv/ODiv';


// class Shop extends Component {
//     state = {
//         categories: null,
//         stores: null,
//         error: false
//     }

//     componentDidMount() {
//         axios.get('http://localhost:3000/categories')
//             .then(response => {
//                 this.setState({ categories: response.data.categories })
//             })
//             .catch(error => {
//                 this.setState({ error: true })
//             })
//     }

//     storeListHandler = (val) => {
//         axios.get(`http://localhost:3000/stores?category=${val}`)
//             .then(response => {
//                 console.log(response)
//                 this.setState({ stores: response.data.stores });
//             })
//             .catch(error => {
//                 this.setState({ error: true })
//             })
//     }


//     render() {
//         return (
//             <Aux>
//                 <CategoryList showStore={this.storeListHandler} categories={this.state.categories} />
//                 <StoreList stores={this.state.stores} />
//             </Aux>
//         )
//     }
// }

function Shop() {
    const [categories, setCategories] = useState([]);
    const [stores, setStores] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/categories')
            .then(response => {
                setCategories(response.data.categories)
            })
            .catch(error => {
                setError({ error: true })
            })
    }, []);

    function storeListHandler(val) {
        axios.get(`http://localhost:3000/stores?category=${val}`)
            .then(response => {
                console.log(response)
                setStores(response.data.stores);
            })
            .catch(error => {
                setError({ error: true })
            })
    }

    function filterStores(stores = [], value = "") {
        return stores.filter(storeObj => storeObj.tags.includes(value));
    }

    function filterStoreHandler(val) {
        setStores(filterStores(stores, val));
    }

    return (
        <ODiv>
            <CategoryList showStore={storeListHandler} categories={categories} />
            <Store stores={stores} filterStoreHandler={filterStoreHandler} />
        </ODiv>
    )
}



export default Shop