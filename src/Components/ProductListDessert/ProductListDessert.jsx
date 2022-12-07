import React from "react";
import classes from './ProductListDessert.module.css';
import { ProductListDesserts } from '../../Data/Data'
import ProductDessert from '../ProductDessert/ProductDessert'

const ProductListDessert = () => {

    

    return(
        <div>
           <div className={classes.containerProductList}>
                {ProductListDesserts.map(product => 
                    <div key={product.id}>
                        <ProductDessert product={product}/>
                    </div>
                )} 
            </div>            
        </div>
    );
};


export default ProductListDessert;
