import React from "react";
import ProductBlock from "../ProductBlock/ProductBlock";
import classes from './ProductList.module.css'



const ProductList = (props) => {
    return(
        <div>
           <div className={classes.productListTitle}>
                <div>{props.title}</div>
                <div className={classes.productListTitleInfo}>infoAboutList</div>
           </div>
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
