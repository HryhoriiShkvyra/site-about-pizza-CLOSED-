import React, { useState } from "react";
import classes from './Card.module.css';
import PizzaManhattan from '../../../Assets/pizza/card/pizza Manhattan.webp'
import Pizza from '../../../Assets/pizza/Pineapple on pizza.jpg'


const ProductList = () => {

    const [activeBtn, setActiveBtn ] = useState('#')
 

    return (
        <div >
            <div className={classes.cardInner}>
                <div className={classes.card}>
                    <img className={classes.cardImage} alt='image' src={PizzaManhattan} />
                    <div className={classes.cardTitle}>Pizza Manhattan </div>
                    <div className={classes.cardDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore omnis ullam ipsam accusamus minus, harum officiis ex assumenda rem?</div>
                    <a className={classes.ReplaceIngredients}>Replace ingredients</a>
                    <div className={classes.productButtons}>
                        <button id="productBtn" onClick={() => setActiveBtn('#')} className={activeBtn === '#' ? 'active' : ''}>Standard</button>
                        <button id="productBtn" onClick={() => setActiveBtn('#btnLarge')} className={activeBtn === '#btnLarge' ? 'active' : ''}>Large</button>
                        <button id="productBtn" onClick={() => setActiveBtn('#btnExtra')} className={activeBtn === '#btnExtra' ? 'active' : ''}>ExtraLarge</button>
                        <button id="productBtn" onClick={() => setActiveBtn('#btnXXL')} className={activeBtn === '#btnXXL' ? 'active' : '   '}>XXLarge</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// () => setActiveBtn('#')


export default ProductList;
