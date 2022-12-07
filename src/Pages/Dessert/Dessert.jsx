import React from "react";
import classes from './Dessert.module.css'
import ProductListDessert from "../../Components/ProductListDessert/ProductListDessert";



const Dessert = () => {
    return(
        <div className={classes.container}>
            <ProductListDessert/>
        </div>
    );
};

export default Dessert;