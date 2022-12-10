import React from "react";
import { useState } from "react";
import classes from './ProductDrinks.module.css';

const ProductDrinks = ({product}) => {

    const [isCapacity, setIsCapacity] = useState('500ml');
    let isPrice = 0; 


    const [isCount, setIsCount] = useState(0)
    function increase () {
        setIsCount(isCount + 1)
    };
    function decrease () {
        setIsCount(isCount - 1)
    };

    // console.log(product.capacity_1)
    return(
        <div>
             <div className={classes.productBlock}>
                <div className={classes.productBlockInner}>
                    <div className={classes.productAbout}>
                        <div classN ame={classes.productImageBlock}>
                            {product.option_1 === '500ml' 
                            ?
                            <img className={classes.productImage} alt='image' src={product.photo} />
                            :
                            <img className={classes.productImageTea} alt='image' src={product.photo} />

                            }
                            { product.markValue === true ? 
                                <div className={classes.productMarkBlock}>
                                    <img className={classes.productMark} src={product.mark}/>
                                </div>
                                :
                                null
                            
                            }
                        </div>
                    </div>
                    <div className={classes.productTitle}>{product.title}</div>

                    <div className={classes.productDescription}>
                        <div className={classes.productBlockDetails}>
                            {product.option_1 === '1500ml' ?
                                <div className={classes.productBlockDetailsCol}>
                                    <button onClick={() => setIsCapacity('500ml')} 
                                    className={isCapacity === '500ml' ? classes.productBtnActive : classes.productBtn}>500ml</button>
                                    <button onClick={() => setIsCapacity('1000ml')} 
                                    className={isCapacity === '1000ml' ? classes.productBtnActive : classes.productBtn}>1000ml</button>
                                    <button onClick={() => setIsCapacity('1500ml')} 
                                    className={isCapacity === '1500ml' ? classes.productBtnActive : classes.productBtn}>1500ml</button>
                                </div>
                                :
                                <button className={classes.productBtnActiveSolo}>500ml</button>                               
                            }
                            <div className={classes.productBlockPriceRow}>
                            <div className={classes.productBlockPriceBlock}>
                                <div className={classes.productPrice}>
                                   {(() => {
                                    if (isCapacity === ('500ml')) {
                                        return(
                                            (isPrice = product.price_1)
                                        ) 
                                    } else if  (isCapacity ==='1000ml') {
                                        return(
                                            (isPrice = product.price_2)
                                        )
                                    }   else if (isCapacity === '1500ml') {
                                        return(
                                            (isPrice = product.price_3)
                                        )
                                    }
                                   })()}

                               
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