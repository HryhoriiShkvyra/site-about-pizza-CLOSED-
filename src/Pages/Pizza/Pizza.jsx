import React from "react";
import News from "../../Components/news/News";
import ProductList from "../../Components/ProductList/ProductList";
import classes from './Pizza.module.css'



export const Pizza = () => {
    return(
        <div>
            <News/>
            <ProductList title={'Best Price'}/>
        </div>
    );
};
