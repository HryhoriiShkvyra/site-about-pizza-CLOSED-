import React from "react";
import classes from './Modal.module.css'

export const Modal = ({visible, setVisible}) => {

    const rootClasses = [classes.modal]

    if (visible) {
        rootClasses.push(classes.active);
    }



    return(
        <div className={rootClasses.join(' ')} onClick={() => setVisible(true)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={classes.modalTitle}> Enter </div>
                <div className={classes.modalForm}>
                    <input className={classes.formField} placeholder="enter login"></input>
                    <input className={classes.formField} placeholder="enter password"></input>
                </div>
                <div className={classes.forgotBtn}>forgot password</div>
                <div className={classes.buttons}>
                    <div className={classes.button}>Login</div>
                    <div className={classes.button}>Registration</div>
                </div>
                <div className={classes.socialText}>Sign in with a social network</div>  
                <div className={classes.socialBtns  }>
                    <div className={classes.socialOne}><i class="fa-brands fa-facebook-f"></i></div>
                    <div className={classes.socialTwo}><i class="fa-brands fa-google"></i></div>
                </div>
            </div>
        </div>
    );
};