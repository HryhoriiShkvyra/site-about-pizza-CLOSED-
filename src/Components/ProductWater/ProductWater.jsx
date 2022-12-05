import React from "react";
import classes from './ProductWater.module.css';

const ProductWater = (product) => {
    return(
        <div>
             <div className={classes.productBlock}>
                <div className={classes.productBlockInner}>
                    <div className={classes.productAbout}>
                        <img className={classes.productImage} alt='image' src={product.photo} />
                        <div className={classes.productTitle}>{product.title}</div>
                    </div>
                    <div className={classes.productDescription}>
                        <div className={classes.productBlockDetails}>
                            <button className={classes.productBtn}>500ml</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductWater;