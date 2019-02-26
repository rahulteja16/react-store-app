import React from 'react';
import Skeleton from 'react-loading-skeleton';

import CategoryItem from './CategoryItem/CategoryItem';
import classes from './CategoryList.css';

const CategoryList = (props) => {
    let categoryEle;
    if (props.categories.length <= 0) {
        categoryEle = null;
    } else {
        categoryEle = props.categories.map((category) => {
            return <CategoryItem
                key={category.id}
                name={category.name}
                activeLogo={category.disabled ? category.sleepIcon : category.openIcon}
                label={category.label}
                showStore={() => props.showStore(category.name, category.id)}
                selectedCategory={props.selectedCategory}
            />
        })
    }

    return (
        <div className={classes.shell}>
            {categoryEle || <Skeleton count={6} height={60} duration={2} />}
        </div>
    )
}

export default CategoryList;