import React from "react";
import { useState } from "react";
import classes from './ProductDessert.module.css';

const ProductDessert = ({product}) => {

    const [isCapacity, setIsCapacity] = useState('standard')

    const [isCount, setIsCount] = useState(0)
    function increase () {
        setIsCount(isCount + 1)
    }
    function decrease () {
        setIsCount(isCount - 1)
    }

    return(
        <div>
             <div className={classes.productBlock}>
                <div className={classes.productBlockInner}>
                    <div className={classes.productAbout}>
                        <div className={classes.productImageBlock}>
                            { product.id === 'sweetSauce50g' ?
                                <img className={classes.productImageSauces} alt='image' src={product.photo}/>
                                :
                                <img className={classes.productImage} alt='image' src={product.photo}/>
                            }
                            <div className={classes.productMark}>{product.mark}</div>
                        </div>
                        <div className={classes.productTitle}>{product.title}</div>
                    </div>
                    <div className={classes.productDescription}>
                        <div className={classes.productBlockDetails}>
                            { product.option === 'double' ?
                            
                                <div className={classes.productBlockDetailsCol}>
                                    <button onClick={() => setIsCapacity('standard')} 
                                    className={isCapacity === 'standard' ? classes.productBtnActive : classes.productBtn}>Standard</button>
                                    <button onClick={() => setIsCapacity('double')} 
                                    className={isCapacity === 'double' ? classes.productBtnActive : classes.productBtn}>Double</button>
                                </div>
                                :
                                <button className={classes.productBtnActiveSolo}>{product.option}</button>
                                
                                
                                
                            }
                            <div className={classes.productBlockPriceRow}>
                            <div className={classes.productBlockPriceBlock}>
                                <div className={classes.productPrice}>
                                    {product.option === 'double' 
                                        ?
                                        <div>
                                            {(() => {
                                            if (isCapacity === 'standard') {
                                                return(
                                                    (product.price_1)
                                                ) 
                                            } else if (isCapacity === 'double') {
                                                return(
                                                    (product.price_2)
                                                )
                                            }
                                            })()}
                                        </div>
                                        :
                                        <div>{product.price_1}</div>      
                                    }       
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

export default ProductDessert;