import React from "react";
import ProductBlock from "../ProductBlock/ProductBlock";
import classes from './ProductList.module.css'



const ProductList = () => {
    return(
        <div>
           <div className={classes.productListTitle}>Title of list</div>
           <div className={classes.containerProductList}>
                <ProductBlock/>
                <ProductBlock/>
                <ProductBlock/>
                <ProductBlock/>
                <ProductBlock/>
                <ProductBlock/>
                <ProductBlock/>
           </div>
            
        </div>
    );
};


export default ProductList;
