import React, { useState } from "react";
import classes from './ProductBlock.module.css';
import PizzaManhattan from '../../Assets/pizza/card/Pizza Manhattan.png'
// import Pizza from '../../Assets/pizza/Pineapple on pizza.jpg'


const ProductBlock = () => {

    const [activeBtnX, setActiveBtnX] = useState('#')
    const [activeBtnY, setActiveBtnY] = useState('#')
 


    return (
        <div >
            <div className={classes.productBlock}>
                <div className={classes.productBlockInner}>
                    <img className={classes.productImage} alt='image' src={PizzaManhattan} />
                    <div className={classes.productTitle}>Pizza Manhattan </div>
                    <div className={classes.productToppings}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </div>
                    <a className={classes.productReplaceableProd}>Replace ingredients</a>
                    <div className={classes.productBlockDetails}>
                        <div className={classes.productBlockDetailsCol}>
                            <button onClick={() => setActiveBtnX('#')} className={activeBtnX === '#' ? classes.active : ''}>Standard size</button>
                            <button onClick={() => setActiveBtnX('#btnExtra')} className={activeBtnX === '#btnExtra' ? classes.active : ''}>Large</button>
                            <button onClick={() => setActiveBtnX('#btnLarge')} className={activeBtnX === '#btnLarge' ? classes.active : ''}>ExtraLarge</button>
                            <button onClick={() => setActiveBtnX('#btnXXL')} className={activeBtnX === '#btnXXL' ? classes.active : '   '}>XXLarge</button>
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
                            <button className={classes.productBlockWrap}>To cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// () => setActiveBtn('#')


export default ProductBlock;
