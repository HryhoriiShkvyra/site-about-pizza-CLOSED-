import React from "react";
import classes from './ProductListDrinks.module.css';
import { ProductListWater } from '../../Data/Data';
import { ProductListTea } from '../../Data/Data'
import ProductDrinks from '../ProductDrinks/ProductDrinks'

const ProductListDrinks = ({ title, titleSecond}) => {

    

    return(
        <div>

            <div className={classes.productListTitle}>
                <div>{title}</div>
                <div className={classes.productListTitleInfo}>
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
            </div>
           <div className={classes.containerProductList}>
                {ProductListWater.map(product => 
                    <div key={product.id}>
                        <ProductDrinks product={product}/>
                    </div>
                )} 
            </div>
            
            <div className={classes.productListTitle}>
                <div>{titleSecond}</div>
                <div className={classes.productListTitleInfo}>
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
            </div>
            <div className={classes.containerProductList}>
               {ProductListTea.map(product => 
                    <div key={product.id}>
                        <ProductDrinks product={product}/>
                    </div>
                )}
            </div>
            
        </div>
    );
};


export default ProductListDrinks;
