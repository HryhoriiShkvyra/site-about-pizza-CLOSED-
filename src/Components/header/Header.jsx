import React, {useState, useEffect} from "react";
import classes from './Header.module.css'
import { useScrollPosition } from "../Hooks/useScrollPosition";
import {Modal} from '../modal/Modal'
import { ModalSecond } from "../modalSecond/Modal";

const Header = () => {
    
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

    const [modal, setModal] = useState(false)
    




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
                            <div onClick={() => setModal(true)} className={classes.login}>Sing in</div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal visible={modal} setVisible={setModal}/>

            <div className={classes.mainSpace}>
                <div className={classNames=(scrollPosition > 50 ? classes.sticky : '')}>
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
                                    <button onClick={showMenuBtn} ><i className="fa-solid fa-bars" ></i></button>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={}></div> */}
            {/* className={classes.openMenu.join('')} onClick={() => setOpen = false} */}
            {isOpenSideMenu ? 
                <div className={classes.sideMenu}>
                    <div className={classes.partOne}>
                        <div className={classes.partOneContent}>
                            <div className={classes.sideMenuBtn}>
                                    <div className={classes.icon}><i class="fa-solid fa-pizza-slice"></i></div>
                                    <div className={classes.btnTitle}>Pizza</div>
                            </div>
                            <div className={classes.sideMenuBtn}>
                                <div className={classes.icon}><i class="fa-solid fa-bottle-water"></i></div>
                                <div className={classes.btnTitle}>Drinks</div>
                                                        
                            </div>
                            <div className={classes.sideMenuBtn}>
                                <div className={classes.icon}><i class="fa-solid fa-bowl-food"></i></div>
                                <div className={classes.btnTitle}>Sides</div>
                            </div>
                            <div className={classes.sideMenuBtn}>
                                <div className={classes.icon}><i class="fa-solid fa-cookie"></i></div>
                                <div className={classes.btnTitle}>Desserts</div>
                            </div>
                        </div>        
                    </div>
                    <div className={classes.partTwo}>
                        <div className={classes.additionalInfo}>
                            <a className={classes.infoBtn}>text</a>
                            <a className={classes.infoBtn}>text</a>
                            <a className={classes.infoBtn}>text</a>
                            <a className={classes.infoBtn}>text</a>
                            <a className={classes.infoBtn}>text</a>
                        </div>
                    </div>
                </div>
            : null
                
            }
        </div>
        
    );
};

export default Header;