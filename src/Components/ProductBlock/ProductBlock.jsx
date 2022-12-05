import React, { useState } from "react";
import classes from './ProductBlock.module.css';
import PizzaManhattan from '../../Assets/pizza/card/Pizza Manhattan.png';


const ProductBlock = ({ product }) => {

    const [isSize, setIsSize] = useState('standard')
    const [isCrust, setIsCrust] = useState('thick')
    const SizeValue = [isSize, isCrust]
    let isPrice = '0'

    const [count, setCount] = useState(0)
    function increase() {
        setCount(count + 1)
        console.log('count + 1');
    };
    function decrease() {
        setCount(count - 1)
        console.log('count - 1');
    };

    // isSize = ProductBlockDetailsCol.isSize;

    // setIsItemsCount(isItemsCount + count)
    



    return (
        <div >
            <div className={classes.productBlock}>
                <div className={classes.productBlockInner}>
                    <img className={classes.productImage} alt='image' src={product.photo} />
                    <div className={classes.productTitle}>{product.title}</div>
                    <div className={classes.productToppings}>{product.ingredients}</div>
                    <a className={classes.productReplaceableProd}>Replace ingredients</a>
                    <div className={classes.productBlockDetails}>
                        <div className={classes.productBlockDetailsCol}>
                            <button onClick={() => setIsSize('standard')} 
                            className={isSize === 'standard' ? classes.productBtnActive : classes.productBtn}>Standard  size</button>
                            <button onClick={() => setIsSize('large')} 
                            className={isSize === 'large' ? classes.productBtnActive : classes.productBtn}>Large</button>
                            <button onClick={() => setIsSize('extra')} 
                            className={isSize === 'extra' ? classes.productBtnActive : classes.productBtn}>ExtraLarge</button>
                            <button onClick={() => setIsSize('xxl')} 
                            className={isSize === 'xxl' ? classes.productBtnActive : classes.productBtn}>XXLarge</button>
                        </div>
                        <div className={classes.productBlockToggle__FlavorBlock}>
                            <button onClick={() => setIsCrust('thick')} 
                            className={isCrust === 'thick' ? classes.productBtnActive : classes.productBtn}>Thick crust</button>
                            <button onClick={() => setIsCrust('thin')} 
                            className={isCrust === 'thin' ? classes.productBtnActive : classes.productBtn}>Thin</button>
                            <button onClick={() => setIsCrust('philadelphia')} 
                            className={isCrust === 'philadelphia' ? classes.productBtnActive : classes.productBtn}>Philadelphia</button>
                            <button onClick={() => setIsCrust('hot-dog')} 
                            className={isCrust === 'hot-dog' ? classes.productBtnActive : classes.productBtn}>Hot-Dog crust</button>
                        </div>                        
                        <div className={classes.productBlockPriceRow}>
                            <div className={classes.productBlockPriceBlock}>
                                <div className={classes.productPrice}>{(() => {
                                    if (`${SizeValue}` === 'standard,thick') {
                                    return (
                                        (isPrice = product.price_1)
                                    )
                                    } else if (`${SizeValue}` === 'standard,thin') {
                                    return (
                                        (isPrice = product.price_1)
                                    )
                                    } else if (`${SizeValue}` === 'standard,philadelphia') {
                                    return (
                                        (isPrice = product.price_2)
                                    )
                                    } else if (`${SizeValue}` === 'standard,hot-dog') {
                                        return(
                                            (isPrice = product.price_3)
                                        )
                                    } else if (`${SizeValue}` === 'large,thick') {
                                        return(
                                            (isPrice = product.price_4)
                                        )
                                    } else if (`${SizeValue}` === 'large,thin') {
                                        return(
                                            (isPrice = product.price_4)
                                        )
                                    } else if (`${SizeValue}` === 'large,philadelphia') {
                                        return (
                                            (isPrice = product.price_5)
                                        )
                                    } else if (`${SizeValue}` === 'large,hot-dog') {
                                        return(
                                            (isPrice = product.price_6)
                                        )
                                    } else if (`${SizeValue}` === 'extra,thick') {
                                        return(
                                            (isPrice = product.price_7)
                                        )
                                    } else if (`${SizeValue}` === 'extra,thin') {
                                        return(
                                            (isPrice = product.price_7)
                                        )
                                    } else if (`${SizeValue}` === 'extra,philadelphia') {
                                        return(
                                            (isPrice = product.price_8)
                                        )
                                    } else if (`${SizeValue}` === 'extra,hot-dog') {
                                        return(
                                            (isPrice = product.price_9)
                                        )
                                    } else if (`${SizeValue}` === 'xxl,thick') {
                                        return(
                                            (isPrice = product.price_10)
                                        ) 
                                    } else if (`${SizeValue}` === 'xxl,thin') {
                                        return(
                                            (isPrice = product.price_10)
                                        )
                                    } else if (`${SizeValue}` === 'xxl,philadelphia') {
                                        return(
                                            (isPrice = product.price_11)
                                        )
                                    } else if (`${SizeValue}` === 'xxl,hot-dog') {
                                        return (
                                            (isPrice = product.price_12)
                                        )
                                    }
                                })()}
                                </div>
                                <div>uah</div>
                            </div>
                            {
                                count === 0 ?
                                    <button onClick={increase} className={classes.productBlockWrap}>To cart</button>
                                      
                                :
                                <div className={classes.increaseDecreaseBtns}>
                                    <div className={classes.decreaseBtn}>
                                        <button className={classes.decrease} onClick={decrease}>
                                            <i class="fa-solid fa-minus"></i>
                                        </button>
                                    </div>
                                    
                                    <div className={classes.count}>
                                        {count}
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
    );
};

// () => setActiveBtn('#')


export default ProductBlock;
