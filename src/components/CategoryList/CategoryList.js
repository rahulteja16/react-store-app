import React from 'react';
import CategoryItem from './CategoryItem/CategoryItem';
import classes from './CategoryList.css';
import Skeleton from 'react-loading-skeleton';

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
            {categoryEle || <Skeleton count={15} height={80} duration={2} />}
        </div>
    )
}

export default CategoryList;