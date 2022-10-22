import React, { useState } from "react";
import classes from './ProductBlock.module.css';
import PizzaManhattan from '../../../Assets/pizza/card/pizza Manhattan.webp'
import Pizza from '../../../Assets/pizza/Pineapple on pizza.jpg'


const ProductBlock = () => {

    const [activeBtnX, setActiveBtnX] = useState('#')
    const [activeBtnY, setActiveBtnY] = useState('#')
 

    return (
        <div >
            <div className={classes.productBlockInner}>
                <div className={classes.productBlock}>
                    <img className={classes.productImage} alt='image' src={PizzaManhattan} />
                    <div className={classes.productTitle}>Pizza Manhattan </div>
                    <div className={classes.productToppings}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore omnis ullam ipsam accusamus minus, harum officiis ex assumenda rem?</div>
                    <a className={classes.productReplaceableProd}>Replace ingredients</a>
                    <div className={classes.productBlockDetails}>
                        <div className={classes.productBlockDetailsColX}>
                            <button id="productBtn" onClick={() => setActiveBtnX('#')} className={activeBtnX === '#' ? 'active' : ''}>Standard</button>
                            <button id="productBtn" onClick={() => setActiveBtnX('#btnLarge')} className={activeBtnX === '#btnLarge' ? 'active' : ''}>Large</button>
                            <button id="productBtn" onClick={() => setActiveBtnX('#btnExtra')} className={activeBtnX === '#btnExtra' ? 'active' : ''}>ExtraLarge</button>
                            <button id="productBtn" onClick={() => setActiveBtnX('#btnXXL')} className={activeBtnX === '#btnXXL' ? 'active' : '   '}>XXLarge</button>
                        </div>
                        <div className={classes.productBlockDetailsColY}>
                            <div className={classes.productBlockToggle__FlavorBlock}>
                                <button id="productBtn" onClick={() => setActiveBtnY('#')} className={activeBtnY === '#' ? 'active' : ''}>Thick crust</button>
                                <button id="productBtn" onClick={() => setActiveBtnY('#thin')} className={activeBtnY === '#thin' ? 'active' : ''}>Thin</button>
                                <button id="productBtn" onClick={() => setActiveBtnY('#philadelphia')} className={activeBtnY === '#philadelphia' ? 'active' : ''}>Philadelphia</button>
                                <button id="productBtn" onClick={() => setActiveBtnY('#hot-dog')} className={activeBtnY === '#hot-dog' ? 'active' : ''}>Hot-Dog crust</button>
                            </div>
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
