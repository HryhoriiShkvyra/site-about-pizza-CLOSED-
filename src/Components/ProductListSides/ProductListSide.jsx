import React from "react";
import classes from './ProductListSides.module.css';
import { ProductListComboBoxes } from '../../Data/Data'
import { ProductListBread } from '../../Data/Data'
import ProductSides from '../ProductSides/ProductSides'

const ProductListSides = ({ title, titleSecond}) => {

    

    return(
        <div>

            <div className={classes.productListTitle}>
                <div>{title}</div>
                <div className={classes.productListTitleInfo}>
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
            </div>
           <div className={classes.containerProductList}>
                {ProductListComboBoxes.map(product => 
                    <div key={product.id}>
                        <ProductSides product={product}/>
                    </div>
                )} 
            </div>
            
            <div className={classes.productListTitle}>
                <div>{titleSecond}</div>
            </div>
            <div className={classes.containerProductList}>
               {ProductListBread.map(product => 
                    <div key={product.id}>
                        <ProductSides product={product}/>
                    </div>
                )}
            </div>
            
        </div>
    );
};


export default ProductListSides;
