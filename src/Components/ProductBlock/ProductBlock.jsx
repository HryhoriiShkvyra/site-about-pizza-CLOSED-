import React, { useState } from "react";
import classes from './ProductBlock.module.css';
import PizzaManhattan from '../../Assets/pizza/card/Pizza Manhattan.png'
// import Pizza from '../../Assets/pizza/Pineapple on pizza.jpg'


const ProductBlock = () => {

    const [activeBtnX, setActiveBtnX] = useState('#')
    const [activeBtnY, setActiveBtnY] = useState('#')

    const [count, setCount] = useState(0)
    function increase() {
        setCount(count + 1)
        console.log('count + 1')
    }
    function decrease() {
        setCount(count - 1)
    }

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
                            <div className={classes.productBtnBlock} style={{paddingRight: '2px'}}>
                                <button onClick={() => setActiveBtnX('#')} className={activeBtnX === '#' ? classes.productBtnActive : classes.productBtn}>Standard Size</button>
                            </div>
                            <div className={classes.productBtnBlock} style={{paddingLeft: '2px'}}>
                                <button onClick={() => setActiveBtnX('extra')} className={activeBtnX === 'extra' ? classes.productBtnActive : classes.productBtn}>Large</button>
                            </div>
                            <div className={classes.productBtnBlock} style={{paddingLeft: '4px'}}>
                                <button onClick={() => setActiveBtnX('large')} className={activeBtnX === 'large' ? classes.productBtnActive : classes.productBtn}>ExtraLarge</button>
                            </div>
                            <div className={classes.productBtnBlock} style={{paddingLeft: '11px'}}>
                                <button onClick={() => setActiveBtnX('xxl')} className={activeBtnX === 'xxl' ? classes.productBtnActive : classes.productBtn}>XXLarge</button>
                            </div>
                        </div>
                            <div className={classes.productBlockToggle__FlavorBlock}>
                                <button onClick={() => setActiveBtnY('#')} className={activeBtnY === '#' ? classes.active : ''}>Thick crust</button>
                                <button onClick={() => setActiveBtnY('#thin')} className={activeBtnY === '#thin' ? classes.active : ''}>Thin</button>
                                <button onClick={() => setActiveBtnY('#philadelphia')} className={activeBtnY === '#philadelphia' ? classes.active : ''}>Philadelphia</button>
                                <button onClick={() => setActiveBtnY('#hot-dog')} className={activeBtnY === '#hot-dog' ? classes.active : ''}>Hot-Dog crust</button>
                            </div>
                        
                        <div className={classes.productBlockPriceRow}>
                            <div className={classes.productBlockPriceBlock}>
                                <div className={classes.productPrice}>999</div>
                                <div>uah</div>
                            </div>
                            {
                                count === 0 ?
                                    <button onClick={increase} className={classes.productBlockWrap}>To cart</button>
                                      
                                :
                                <div className={classes.increaseDecreaseBtn}>
                                    <div className={classes.increaseBtn}>
                                        <button onClick={increase}>
                                            <i class="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                    {count}
                                    <div className={classes.decreaseBtn}>
                                        <button onClick={decrease}>
                                            <i class="fa-solid fa-minus"></i>
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
