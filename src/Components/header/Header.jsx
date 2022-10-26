import React, {useState, useEffect} from "react";
import classes from './Header.module.css'
import { useScrollPosition } from "../Hooks/useScrollPosition";

const Header = () => {
    
    const scrollPosition = useScrollPosition()

    function classNames(...classes) {
        return classes.filter(Boolean).join('');
    }

    // const [stickyHeader, setStickyHeader] = useState(false)
    
    
    // const header = document.getElementById("navbar");
    // const sticky = window.offsetTop;
    
    // function stickyHeader() {
    //     if (window.pageYOffset >= sticky) {
    //         header.classList.add("sticky")
    //       } else {
    //         header.classList.remove("sticky");
    //       }
    //     }
    // function sticked() {
    //     if(window.scrollY >= 50) {
    //         stickyHeader(true) 
    //     } else {
    //         stickyHeader(false)
    //     };
    // };

    // window.addEventListener("scroll", sticked)

    
    // const [stickyClass, setStickyClass] = useState('');

    // useEffect(() => {
    //   window.addEventListener('scroll', stickNavbar);
    //   return () => window.removeEventListener('scroll', stickNavbar);
    // }, []);
  
    // const stickNavbar = () => {
    //   if (window !== undefined) {
    //     let windowHeight = window.pageYOffset;
    //     // window height changed for the demo
    //     windowHeight > 1 ? setStickyClass('sticky') : setStickyClass('');
    //   }
    // };

    // const [activeBtn, setActiveBtn] = useState(false)

    // const click = () => {
    //     if(activeBtn != false) {
    //         document.querySelector()
    //     }
    // }
    // <button onClick={() => setActiveBtnX('#')} className={activeBtnX === '#' ? 'active' : ''}>Standard size</button>

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

        
            <div id="navbar" 
                className={classNames(scrollPosition > 0 ? classes.sticky : '')}
                >
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
                        {/* <button onclick={() => setActiveBtn(true)} className={activeBtn === true ? 'activeBtn' : ''}> */}
                            <i className="fa-solid fa-bars"></i>
                        {/* </button> */}
                    </div>
                </div>
            </div> 
            <div className={classes.sideMenu}>
                <div className={classes.partOne}>
                    <div className={classes.sideMenuBtn}>
                        <i class="fa-solid fa-pizza-slice"></i>
                        Pizza
                    </div>
                    <div className={classes.sideMenuBtn}>
                        <i class="fa-solid fa-pizza-slice"></i>
                        Pizza
                    </div>
                    <div className={classes.sideMenuBtn}>
                        <i class="fa-solid fa-pizza-slice"></i>
                        Pizza
                    </div>
                    <div className={classes.sideMenuBtn}>
                        <i class="fa-solid fa-pizza-slice"></i>
                        Pizza
                    </div>
                </div>
                <div className={classes.partTwo}></div>
            </div>
        </div>
        
    );
};

export default Header;