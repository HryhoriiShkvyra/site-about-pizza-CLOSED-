import React from "react";
import classes from './Checkout.module.css';
import {  productListPizzaBestPrice } from '../../Data/Data'
import { useSelector } from "react-redux";


const Checkout = () => {

    const products = useSelector(state=> state.cart.products)

    console.log(products)

    const pizza = {productListPizzaBestPrice}
    const pizzaItem = pizza.productListPizzaBestPrice[0]
    console.log('pizza item =====> ', pizzaItem)
    return(
        <div className="container">
            <div className={classes.checkout}>
                <div className={classes.checkoutOrder}>
                    <div className={classes.categoryTitle}> Checkout Order</div>
                </div>
                <div className={classes.yourOrder}>
                    <div className={classes.categoryTitle}> Your Order</div>
                    <div className={classes.cardItemBody}>
                        { products?.map((item) => {
                            <div className={classes.cardItem}>
                                <img className={classes.cardPhoto} src={pizzaItem.photo}/>
                                <div className={classes.cardItemAbout}>
                                    <div className={classes.cardItemTitle}> {pizzaItem.title} </div>
                                    <div className={classes.cardItemIngredients}> {pizzaItem.ingredients} </div>
                                    <div className={classes.cardItemSize}>Size</div>
                                    <div className={classes.cardItemPrice}>{pizzaItem.price_1}.00 uah</div>
                                    <div className={classes.cardItemQuantity}>
                                        <button className={classes.cardItemQuantityBtn}><i class="fa-solid fa-plus"></i></button>
                                        <div className={classes.cardItemQuantityCount}>0</div>
                                        <button className={classes.cardItemQuantityBtn}><i class="fa-solid fa-minus"></i></button>
                                    </div>
                                    <div className={classes.cardItemRemove}>
                                        <button className={classes.cardItemRemoveBtn}><i class="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                            </div> 
                        })

                        }
                        {/* <div className={classes.cardItem}>
                            <img className={classes.cardPhoto} src={pizzaItem.photo}/>
                            <div className={classes.cardItemAbout}>
                                <div className={classes.cardItemTitle}> {pizzaItem.title} </div>
                                <div className={classes.cardItemIngredients}> {pizzaItem.ingredients} </div>
                                <div className={classes.cardItemSize}>Size</div>
                                <div className={classes.cardItemPrice}>{pizzaItem.price_1}.00 uah</div>
                                <div className={classes.cardItemQuantity}>
                                    <button className={classes.cardItemQuantityBtn}><i class="fa-solid fa-plus"></i></button>
                                    <div className={classes.cardItemQuantityCount}>0</div>
                                    <button className={classes.cardItemQuantityBtn}><i class="fa-solid fa-minus"></i></button>
                                </div>
                                <div className={classes.cardItemRemove}>
                                    <button className={classes.cardItemRemoveBtn}><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </div>  */}
                        <div className={classes.cardItemFooter}>
                            <div className={classes.FinalPrice}>221.00 uah</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Checkout;