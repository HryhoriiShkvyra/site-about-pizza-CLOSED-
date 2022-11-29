import React, { useState } from "react";
import classes from './ProductBlock.module.css';
import PizzaManhattan from '../../Assets/pizza/card/Pizza Manhattan.png'
// import Pizza from '../../Assets/pizza/Pineapple on pizza.jpg'


const ProductBlock = ({isItemsCount, setIsItemsCount}) => {

    const [isSize, setIsSize] = useState('standard')
    const [isCrust, setIsCrust] = useState('thick')
    // const [isPrice, setIsPrice] = useState(0)
    let isPrice = '0'
    // const [sizeAndCrust, setSizeAndCrust] = useState()

    function increase() {
        setIsItemsCount(isItemsCount + 1)
        console.log('count + 1');
    };
    function decrease() {
        setIsItemsCount(isItemsCount - 1)
        console.log('count - 1');

    };

    // const priceList = ([
    //     {name: 'standard', price: 25},
    //     {name: 'standard', price: 35},
    //     {name: 'standard', price: 45},
    //     {name: 'standard', price: 55},
    // ])


    const priceCount = [isSize, isCrust];
    console.log(priceCount);
    

    return (
        <div >
            <div className={classes.productBlock}>
                <div className={classes.productBlockInner}>
                    <img className={classes.productImage} alt='image' src={PizzaManhattan} />
                    <div className={classes.productTitle}>Pizza Manhattan </div>
                    <div className={classes.productToppings}>(double serving of mushrooms), Mushrooms, Mozarella, Peperoni, Al'fredo sauce</div>
                    <a className={classes.productReplaceableProd}>Replace ingredients</a>
                    <div className={classes.productBlockDetails}>
                        <div className={classes.productBlockDetailsCol}>
                                <button onClick={() => setIsSize('standard')} 
                                className={isSize === 'standard' ? classes.productBtnActive : classes.productBtn}>Standard  size</button>
                                <button onClick={() => setIsSize('extra')} 
                                className={isSize === 'extra' ? classes.productBtnActive : classes.productBtn}>Large</button>
                                <button onClick={() => setIsSize('large')} 
                                className={isSize === 'large' ? classes.productBtnActive : classes.productBtn}>ExtraLarge</button>
                                <button onClick={() => setIsSize('xxl')} 
                                className={isSize === 'xxl' ? classes.productBtnActive : classes.productBtn}>XXLarge</button>
                        </div>
                            <div className={classes.productBlockToggle__FlavorBlock}>
                                <button onClick={() => setIsCrust('thick')} 
                                className={isCrust === 'thick' ? classes.productBtnActive : classes.productBtnFlavor}>Thick crust</button>
                                <button onClick={() => setIsCrust('thin')} 
                                className={isCrust === 'thin' ? classes.productBtnActive : classes.productBtnFlavor}>Thin</button>
                                <button onClick={() => setIsCrust('philadelphia')} 
                                className={isCrust === 'philadelphia' ? classes.productBtnActive : classes.productBtnFlavor}>Philadelphia</button>
                                <button onClick={() => setIsCrust('hot-dog')} 
                                className={isCrust === 'hot-dog' ? classes.productBtnActive : classes.productBtnFlavor}>Hot-Dog crust</button>
                            </div>
                        
                        <div className={classes.productBlockPriceRow}>
                            <div className={classes.productBlockPriceBlock}>
                                <div className={classes.productPrice}>{(() => {
                                    if (isSize === 'standard') {
                                    return (
                                        (isPrice = 30)
                                    )
                                    } else if (isSize === 'extra') {
                                    return (
                                        (isPrice = 40)
                                    )
                                    } else if (isSize === 'large') {
                                    return (
                                        (isPrice = 50)
                                    )
                                    } else if (isSize === 'xxl') {
                                        return(
                                            (isPrice = 60)
                                        )
                                    } else if (priceCount === 'thick') {
                                        return(
                                            (isPrice = '35')
                                        )
                                    }   
                                })()}
                                </div>
                                <div>uah</div>
                            </div>
                            {
                                isItemsCount === 0 ?
                                    <button onClick={increase} className={classes.productBlockWrap}>To cart</button>
                                      
                                :
                                <div className={classes.increaseDecreaseBtns}>
                                    <div className={classes.decreaseBtn}>
                                        <button className={classes.decrease} onClick={decrease}>
                                            <i class="fa-solid fa-minus"></i>
                                        </button>
                                    </div>
                                    
                                    <div className={classes.count}>
                                        {isItemsCount}
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
