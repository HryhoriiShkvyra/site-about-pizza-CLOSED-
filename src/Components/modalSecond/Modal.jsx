import React from "react";
import classes from './Modal.module.css'

export const ModalSecond = ({visibleSecond, setVisibleSecond}) => {

    const rootClasses = [classes.modal]

    if (visibleSecond) {
        rootClasses.push(classes.active);
        console.log("registration modal")
    }



    return(
        <div className={rootClasses.join(' ')} onClick={() => setVisibleSecond(false)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={classes.modalInner}>
                    <div className={classes.modalTitle}>Registration</div>
                    <div className={classes.modalForm}>
                        <input className={classes.formField} placeholder='enter your email'/>
                        <input className={classes.formField} placeholder='enter your password'/>
                        <input className={classes.formField} placeholder='repeat your password'/>
                    </div>
                    <div className={classes.button}>Register</div>
                </div>
                <div className={classes.br}></div>
                <div onClick={() => setVisibleSecond(false)} className={classes.returnBtn}>Return to sign in</div>
            </div>
        </div>
    );
};