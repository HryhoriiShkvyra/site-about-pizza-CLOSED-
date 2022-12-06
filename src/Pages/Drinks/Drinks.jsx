import React from "react";
import classes from './Drinks.module.css'
import ProductListDrinks from "../../Components/ProductListDrinks/ProductListDrinks";



export const Drinks = ({isItemsCount, setIsItemsCount}) => {
    return(
        <div className={classes.container}>
            <ProductListDrinks title={'Water'}/>
        </div>
    )
}