import React, { useState } from "react";
import classes from './ProductBlock.module.css';
import PizzaManhattan from '../../Assets/pizza/card/Pizza Manhattan.png'
// import Pizza from '../../Assets/pizza/Pineapple on pizza.jpg'


const ProductBlock = ({isPizzaCount, setIsPizzaCount}) => {

    const [isSize, setIsSize] = useState('#')
    const [isCrust, setIsCrust] = useState('#')

    function increase() {
        setIsPizzaCount(isPizzaCount + 1)
        console.log('count + 1')
    }
    function decrease() {
        setIsPizzaCount(isPizzaCount - 1)
        console.log('count - 1')

    }

    
    // function price(activeBtnX)

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
                                <button onClick={() => setIsSize('#')} 
                                className={isSize === '#' ? classes.productBtnActive : classes.productBtn}>Standard  size</button>
                                <button onClick={() => setIsSize('extra')} 
                                className={isSize === 'extra' ? classes.productBtnActive : classes.productBtn}>Large</button>
                                <button onClick={() => setIsSize('large')} 
                                className={isSize === 'large' ? classes.productBtnActive : classes.productBtn}>ExtraLarge</button>
                                <button onClick={() => setIsSize('xxl')} 
                                className={isSize === 'xxl' ? classes.productBtnActive : classes.productBtn}>XXLarge</button>
                        </div>
                            <div className={classes.productBlockToggle__FlavorBlock}>
                                <button onClick={() => setIsCrust('#')} 
                                className={isCrust === '#' ? classes.productBtnActive : classes.productBtnFlavor}>Thick crust</button>
                                <button onClick={() => setIsCrust('#thin')} 
                                className={isCrust === '#thin' ? classes.productBtnActive : classes.productBtnFlavor}>Thin</button>
                                <button onClick={() => setIsCrust('#philadelphia')} 
                                className={isCrust === '#philadelphia' ? classes.productBtnActive : classes.productBtnFlavor}>Philadelphia</button>
                                <button onClick={() => setIsCrust('#hot-dog')} 
                                className={isCrust === '#hot-dog' ? classes.productBtnActive : classes.productBtnFlavor}>Hot-Dog crust</button>
                            </div>
                        
                        <div className={classes.productBlockPriceRow}>
                            <div className={classes.productBlockPriceBlock}>
                                <div className={classes.productPrice}>0</div>
                                <div>uah</div>
                            </div>
                            {
                                isPizzaCount === 0 ?
                                    <button onClick={increase} className={classes.productBlockWrap}>To cart</button>
                                      
                                :
                                <div className={classes.increaseDecreaseBtns}>
                                    <div className={classes.decreaseBtn}>
                                        <button className={classes.decrease} onClick={decrease}>
                                            <i class="fa-solid fa-minus"></i>
                                        </button>
                                    </div>
                                    
                                    <div className={classes.count}>
                                        {isPizzaCount}
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
