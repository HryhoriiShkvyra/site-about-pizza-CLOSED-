import React from "react";
import ProductBlock from "../ProductBlock/ProductBlock";
import classes from './ProductList.module.css'



const ProductList = ({title, isItemsCount, setIsItemsCount}) => {



    return(
        <div>
           <div className={classes.productListTitle}>
                <div>{title}</div>
                <div className={classes.productListTitleInfo}>
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
           </div>
           <div className={classes.containerProductList}>
                <ProductBlock isItemsCount={isItemsCount} setIsItemsCount={setIsItemsCount}/>
                <ProductBlock isItemsCount={isItemsCount} setIsItemsCount={setIsItemsCount}/>
               
           </div>
            
        </div>
    );
};


export default ProductList;
