import React from "react";
import classes from './SideMenu.module.css';


export const SideMenu = ({isOpenSideMenu}) => {


    // const [isOpenSideMenu, setIsOpenSideMenu] = useState(false)


    return(
        <div>
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






