import React from "react";
import ProductBlock from "../ProductBlock/ProductBlock";
import classes from './ProductList.module.css';
import { productListPizzaBestPrice } from '../../Data/Data';
import { productListPizzaHeroes } from '../../Data/Data';

const ProductList = ({ title, titleSecond, navBarActive }) => {

    

console.log(productListPizzaHeroes)

    return(
        <div>

            <div className={classes.productListTitle}>
                <div>{title}</div>
                <div className={classes.productListTitleInfo}>
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
            </div>
           <div className={classes.containerProductList}>
                {productListPizzaBestPrice.map(product => 
                    <div key={product.id}>
                        <ProductBlock product={product}/>
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
               {productListPizzaHeroes.map(product => 
                    <div key={product.id}>
                        <ProductBlock product={product}/>
                    </div>
                )}
            </div>
            
        </div>
    );
};


export default ProductList;
