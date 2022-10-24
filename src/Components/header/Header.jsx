import React from "react";
import classes from './Header.module.css'


const Header = () => {
    return(
        <div>
            <div className={classes.fakeHeader}>
                <div className={classes.container}>
                    <div className={classes.fakeHeaderInner}>
                        <div className={classes.call}>
                            <div className={classes.phone}><i class="fa-solid fa-phone"></i></div>
                            <div className={classes.number}>044 000 00 00</div>
                        </div>  
                        <div className={classes.location}>
                            <div className={classes.point}><i class="fa-solid fa-location-pin"></i></div>
                            <button className={classes.city}>city</button>
                        </div>
                        <div></div>
                        <div className={classes.rightBlock}>
                            <div className={classes.select}>select</div>
                            <div className={classes.login}>Sing in</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={classes.mainHeader}>
                <div className={classes.container}>
                    <div className={classes.mainHeaderInner}>
                        <div className={classes.logo}>
                            <i class="fa-solid fa-square"></i>
                            Fake Pizza
                        </div>
                        <nav className={classes.nav}>
                            <a className={classes.navBtn}>Pizza</a>
                            <a className={classes.navBtn}>Drinks</a>                            
                            <a className={classes.navBtn}>Desserts</a>
                            <a className={classes.navBtn}>Our team</a>                        
                        </nav>
                        <div className={classes.checkoutField}>
                            <button className={classes.cartBtn}>
                                <div>00</div>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                            <button className={classes.checkoutBtn}>Checkout</button>
                        </div>
                        <div className={classes.menu}>
                            <i className="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};

export default Header;