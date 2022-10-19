import React from "react";
import classes from './Header.module.css'


const Header = () => {
    return(
        <div className={classes.header}>
            <logo className={classes.logo}>logo</logo>
            <nav className={classes.nav}>
                <a>Pizza</a>
                <a>Bar</a>
                <a>Desserts</a>
                <a>Our team</a>
                <a>Charity</a>
            </nav>
            <div className={classes.cart}>
                <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div className={classes.bar}>
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    );
};

export default Header;