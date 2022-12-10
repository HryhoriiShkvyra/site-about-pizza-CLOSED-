import React from "react";
import { useState } from "react";
import classes from './ProductSides.module.css';

const ProductDrinks = ({product}) => {

    const [isCapacity, setIsCapacity] = useState('Standard')

    const [isCount, setIsCount] = useState(0)
    function increase () {
        setIsCount(isCount + 1)
    }
    function decrease () {
        setIsCount(isCount - 1)
    }

    // console.log(product.capacity_1)
    return(
        <div>
             <div className={classes.productBlock}>
                <div className={classes.productBlockInner}>
                    <div className={classes.productAbout}>
                        <div className={classes.productImageBlock}>
                            {
                                product.id === 'setOfSauces' ?
                                <img className={classes.productImageSauces} alt='image' src={product.photo}/>
                                :
                                <img className={classes.productImage} alt='image' src={product.photo}/>

                            }
                            { product.markValue === true ? 
                            <div className={classes.productMarkBlock}>
                                <img className={classes.productMark} src={product.mark}/>
                            </div>
                            :
                            null
                        
                            }
                        </div>
                        <div className={classes.productTitle}>{product.title}</div>
                    </div>
                    <div className={classes.productDescription}>
                        <div className={classes.productBlockDetails}>
                            { product.option === 'Double' ?
                            
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
                                    {product.price_1 === true 
                                    ?
                                        <div>
                                            {product.price_1}
                                        </div>
                                    :
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

export default ProductDrinks;