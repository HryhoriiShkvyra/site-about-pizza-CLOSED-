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
    const [isOpenSideMenu, setIsOpenSideMenu] = useState(false)
    const showMenuBtn = () => {
        setIsOpenSideMenu(isOpenSideMenu => !isOpenSideMenu)
        if(isOpenSideMenu === false) {
            console.log('openMenu is true')
        } else {
            console.log('openMenu is false')
        };
    };

    const [navBarActive, setNavBarActive] = useState('#')

    return(
        <div>
            <Header/>
            <div className={classes.menu}>
                
                    <Router>
                        <div className={classes.navBarBlock}>
                            <div className={scrollPosition > 50 ? classes.sticky : ''}>
                                <nav className={classes.navBar}>
                                        <div className={classes.logo}>Domino's Pizza</div>
                                        <div className={classes.barLinks}>
                                            <Link onClick={() => setNavBarActive('#')} 
                                                className={navBarActive === '#' ? classes.linkActive : classes.link} to='/' >Pizza</Link>
                                            <Link onClick={() => setNavBarActive('drinks')} 
                                                className={navBarActive === 'drinks' ? classes.linkActive : classes.link} to='/Drinks' >Drinks</Link>
                                            <Link onClick={() => setNavBarActive('sides')} 
                                                className={navBarActive === 'sides' ? classes.linkActive : classes.link} to='/Sides' >Sides</Link>
                                            <Link onClick={() => setNavBarActive('desserts')}
                                            className={navBarActive === 'desserts' ? classes.linkActive : classes.link} to='/Desserts' >Desserts</Link>
                                        </div>
                                        <div className={classes.btnCart}>
                                            <div className={classes.cartCount}>
                                                <div className={classes.count}>
                                                00
                                                <i className="fa-solid fa-cart-shopping"></i>
                                                </div>
                                            
                                            </div>
                                            <div className={classes.btnBuy}>Checkout</div>
                                        </div>
                                        <div onClick={showMenuBtn} className={classes.sideBar}>
                                            {
                                                isOpenSideMenu ?
                                                    <i class="fa-solid fa-xmark"></i>
                                                    :
                                                    <i className="fa-solid fa-bars"></i>

                                            }
                                            <SideMenu/>
                                        </div>
                                        
                                </nav>
                            </div>

                        </div>
                        <Routes>
                            <Route path="/" element={<Pizza/>}/>
                            <Route path="/Drinks" element={<Drinks/>}/>
                            </Routes>   
                        </Router>
                
                
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
            <SideMenu isOpenSideMenu={isOpenSideMenu}/>
            {/* <News/> */}
            {/* <ProductList title={'Best Price'}/> */}
               
        </div>
        
    )
}