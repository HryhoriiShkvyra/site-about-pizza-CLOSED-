import React from "react";
import classes from './Card.module.css';
import PizzaManhattan from '../../../Assets/pizza/card/pizza Manhattan.webp'
import Pizza from '../../../Assets/pizza/Pineapple on pizza.jpg'


const ProductList = () => {
    return (
        <div >
            <div className={classes.cardInner}>
                <div className={classes.card}>
                    <img className={classes.cardImage} alt='image' src={PizzaManhattan} />
                    <div className={classes.cardTitle}>Pizza Manhattan</div>
                    <div className={classes.cardDescription}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio inventore omnis ullam ipsam accusamus minus, harum officiis ex assumenda rem?</div>
                    <a className={classes.ReplaceIngredients}>Replace ingredients</a>
                    <div className={classes.productButtons}>
                        <div className={classes.productButton}>Standard size</div>
                        <div className={classes.productButton}>Large</div>
                        <div className={classes.productButton}>ExtraLarge</div>
                        <div className={classes.productButton}>XXLarge</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProductList;
