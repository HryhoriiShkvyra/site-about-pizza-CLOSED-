import React from "react";
import classes from './Header.module.css'


const Header = () => {
    return(
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.fakeHeader}>
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
                        <div className={classes.login}>Log in</div>
                    </div>
                </div>
                {/* <div className={classes.mainHeader}>
                    <div className={classes.logo}>logo</div>
                    <nav className={classes.nav}>
                        <a>Pizza</a>
                        <a>Bar</a>
                        <a>Desserts</a>
                        <a>Our team</a>                        <a>Charity</a>
                    </nav>
                    <div className={classes.cart}>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                    <div className={classes.bar}><i className="fa-solid fa-bars"></i></div>
                </div> */}
            </div>
            
        </div>
        
    );
};

export default Header;