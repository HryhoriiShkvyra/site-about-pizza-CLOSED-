import React, {useState} from "react";
import Header from "../../Components/header/Header";
import News from "../../Components/news/News";
import ProductList from "../../Components/ProductList/ProductList";
import { Drinks } from "../Drinks/Drinks";
import { useScrollPosition } from "../../Components/Hooks/useScrollPosition";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Pizza } from "../Pizza/Pizza";
import Checkout from "../Checkout/Checkout";

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

    
    const [isItemsCount, setIsItemsCount] = useState(0)

    return(
        <div>
            <Header/>
            <div className={classes.menu}>
                
                    <Router>
                        <div className={classes.navBarBlock}>
                            <div className={scrollPosition > 50 ? classes.sticky : ''}>
                                <nav className={classes.navBar}>
                                        <div className={classes.barLinks}>
                                            <Link onClick={() => setNavBarActive('index')} to='/'>
                                                <div className={classes.logo}>Domino's Pizza</div>
                                            </Link>
                                            <div className={classes.links}>
                                                <Link onClick={() => setNavBarActive('pizza')} 
                                                    className={navBarActive === 'pizza' ? classes.linkActive : classes.link} to='/  ' >Pizza</Link>
                                                <Link onClick={() => setNavBarActive('drinks')} 
                                                    className={navBarActive === 'drinks' ? classes.linkActive : classes.link} to='/Drinks' >Drinks</Link>
                                                <Link onClick={() => setNavBarActive('sides')} 
                                                    className={navBarActive === 'sides' ? classes.linkActive : classes.link} to='/Sides' >Sides</Link>
                                                <Link onClick={() => setNavBarActive('desserts')}
                                                    className={navBarActive === 'desserts' ? classes.linkActive : classes.link} to='/Desserts' >Dessert</Link>
                                            </div>
                                            <Link className={classes.checkoutBlockLink} to='/Checkout'>
                                                <div className={isItemsCount === 0 ? classes.checkoutBlock : classes.checkoutBlockActive}>
                                                    <div className={classes.checkout}>
                                                        <div className={classes.count}>
                                                                {isItemsCount}
                                                        </div>
                                                        <i style={{fontSize: '14px'}} className="fa-solid fa-cart-shopping"></i>
                                                    </div>
                                                    {isItemsCount === 0 ? 
                                                            null
                                                        :
                                                            <div className={classes.price}>295.00 uah</div>
                                                    }

                                                    <div className={classes.btnBuy}>Checkout</div>
                                                </div>
                                            </Link>
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
                            <Route path="/" element={<Pizza 
                            isItemsCount={isItemsCount} setIsItemsCount={setIsItemsCount}
                            navBarActive={navBarActive} setNavBarActive={setNavBarActive}/>}/>
                            <Route path="/Drinks" element={<Drinks 
                            isItemsCount={isItemsCount} setIsItemsCount={setIsItemsCount}
                            />}/>
                            <Route path="/Checkout" element={<Checkout/>}/>
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