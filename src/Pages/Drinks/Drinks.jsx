import React from "react";
import classes from './Drinks.module.css'
import ProductListWater from "../../Components/ProductListWater/ProductListWater";



export const Drinks = ({isItemsCount, setIsItemsCount}) => {
    return(
        <div className={classes.container}>
            <ProductListWater title={'Water'}/>
        </div>
    )
}