import React from "react";
import ProductBlock from "../ProductBlock/ProductBlock";
import classes from './ProductList.module.css'



const ProductList = ({title, isPizzaCount, setIsPizzaCount}) => {
    return(
        <div>
           <div className={classes.productListTitle}>
                <div>{title}</div>
                <div className={classes.productListTitleInfo}>
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
           </div>
           <div className={classes.containerProductList}>
                <ProductBlock isPizzaCount={isPizzaCount} setIsPizzaCount={setIsPizzaCount}/>
               
           </div>
            
        </div>
    );
};


export default ProductList;
