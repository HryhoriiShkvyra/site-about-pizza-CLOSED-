import React, {useState, useEffect} from "react";
import classes from './Header.module.css'
import { useScrollPosition } from "../Hooks/useScrollPosition";
import {Modal} from '../modal/Modal'
import { ModalSecond } from "../modalSecond/Modal";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Index} from '../../Pages/Index/Index';
import {Drinks} from '../../Pages/Drinks/Drinks'

const Header = () => {
    
    const scrollPosition = useScrollPosition()
    

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

          
        </div>
        
    );
};

export default Header;