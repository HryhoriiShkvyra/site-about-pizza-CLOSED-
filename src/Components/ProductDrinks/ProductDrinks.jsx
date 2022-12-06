import React from "react";
import { useState } from "react";
import classes from './ProductDrinks.module.css';

const ProductDrinks = ({product}) => {

    const [isCapacity, setIsCapacity] = useState('330')

    const [isCount, setIsCount] = useState(0)
    function increase () {
        setIsCount(isCount + 1)
    }
    function decrease () {
        setIsCount(isCount - 1)
    }

    console.log(product.capacity_1)
    return(
        <div>
             <div className={classes.productBlock}>
                <div className={classes.productBlockInner}>
                    <div className={classes.productAbout}>
                        <div className={classes.productImageBlock}>
                            <img className={classes.productImage} alt='image' src={product.photo} />
                        </div>
                        <div className={classes.productTitle}>{product.title}</div>
                    </div>
                    <div className={classes.productDescription}>
                        <div className={classes.productBlockDetails}>
                            {product.capacity_1 === '330ml' ?
                                <div className={classes.productBlockDetailsCol}>
                                    <button onClick={() => setIsCapacity('330')} 
                                    className={isCapacity === '330' ? classes.productBtnActive : classes.productBtn}>330ml</button>
                                    <button onClick={() => setIsCapacity('500')} 
                                    className={isCapacity === '500' ? classes.productBtnActive : classes.productBtn}>500ml</button>
                                    <button onClick={() => setIsCapacity('750')} 
                                    className={isCapacity === '750' ? classes.productBtnActive : classes.productBtn}>750ml</button>
                                </div>
                                :
                                <button className={classes.productBtnActiveSolo}>500ml</button>

                               
                            }
                            <div className={classes.productBlockPriceRow}>
                            <div className={classes.productBlockPriceBlock}>
                                <div className={classes.productPrice}>
                                   30
                                </div>
                                <div>uah</div>
                            </div>
                            {
                                isCount === 0 ?
                                    <button onClick={increase} className={classes.productBlockWrap}>To cart</button>
                                      
                                :
                                <div className={classes.increaseDecreaseBtns}>
                                    <div className={classes.decreaseBtn}>
                                        <button className={classes.decrease} onClick={decrease}>
                                            <i class="fa-solid fa-minus"></i>
                                        </button>
                                    </div>
                                    
                                    <div className={classes.count}>
                                        {isCount}
                                    </div>
                                    <div className={classes.increaseBtn}>
                                        <button className={classes.increase} onClick={increase}>
                                            <i class="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                </div> 
                            }
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDrinks;