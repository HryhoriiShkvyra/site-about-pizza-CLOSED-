import React, {useState} from "react";
import Header from "../../Components/header/Header";
import News from "../../Components/news/News";
import ProductList from "../../Components/ProductList/ProductList";
import { Drinks } from "../Drinks/Drinks";
import { useScrollPosition } from "../../Components/Hooks/useScrollPosition";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Pizza } from "../Pizza/Pizza";

import classes from './Index.module.css'
import { SideMenu } from "../../Components/SideMenu/SideMenu";

export const Index = () => {


    const scrollPosition = useScrollPosition()

    function classNames(...classes) {
        return classes.filter(Boolean).join('');
    }


    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false)
    const showMenuBtn = () => {
        setIsOpenSideMenu(isOpenSideMenu => !isOpenSideMenu)
        if(isOpenSideMenu === false) {
            console.log('openMenu is true')
        } else {

            console.log('openMenu is false')
        };
    };

    return(
        <div>
            <Header/>
            <div className={classes.menu}>
                <div className={classes.logo}>Logo</div>
                <nav className={classes.navBar}>
                
                    <Router>
                        <Link/>
                            <Link to='/' >Pizza</Link>
                            <Link to='/Drinks' >Drinks</Link>
                            <div className={classes.btnCart}>
                                <div className={classes.cartCount}>count</div>
                                <div className={classes.btnBuy}>Order</div>
                            </div>
                            <div className={classes.sideBar}>
                                <SideMenu/>
                            </div>
                        <Routes>
                            <Route path="/" element={<Pizza/>}/>
                            <Route path="/Drinks" element={<Drinks/>}/>
                        </Routes>
                    </Router>
                </nav>
                
            </div>
            {/* <div className={classes.mainSpace}>
                <div className={classNames=(scrollPosition > 50 ? classes.sticky : '')}>
                    <div className={classes.mainHeader}>
                        <div className={classes.container}>
                            <div className={classes.mainHeaderInner}>
                                <div className={classes.logo}>
                                    <i class="fa-solid fa-square"></i>
                                    Fake Pizza
                                </div>
                                <nav className={classes.nav}>

                                  
                                </nav>
                                <div className={classes.checkoutField}>
                                    <button className={classes.cartBtn}>
                                        <div>00</div>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </button>
                                    <button className={classes.checkoutBtn}>Checkout</button>
                                </div>
                                    <button onClick={showMenuBtn} ><i className="fa-solid fa-bars" ></i></button>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <SideMenu isOpenSideMe  nu={isOpenSideMenu}/>
            {/* <News/> */}
            {/* <ProductList title={'Best Price'}/> */}
               
        </div>
        
    )
}