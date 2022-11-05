import React, {useState} from "react";
import { ModalSecond } from "../modalSecond/Modal";
import classes from './Modal.module.css'

export const Modal = ({visible, setVisible}) => {

    const rootClasses = [classes.modal]

    if (visible) {
        rootClasses.push(classes.active);
        console.log("login modal")
    }

    const [modalSecond, setModalSecond] = useState(false)



    return(
        <div>
            {modalSecond ? 
                <ModalSecond visibleSecond={modalSecond} setVisibleSecond={setModalSecond} />
                :
                <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
                    <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={classes.modalInner}>
                            <div className={classes.modalTitle}> Sign in </div>
                            <div className={classes.modalForm}>
                                <input className={classes.formField} placeholder="enter login"></input>
                                <input className={classes.formField} placeholder="enter password"></input>
                            </div>
                            <div className={classes.forgotBtn}>Forgot password?</div>
                            <div className={classes.buttons}>
                                <div className={classes.button}>Login</div>
                                <div onClick={() => setModalSecond(true)} className={classes.button}>Registration</div>
                            </div>
                            <div className={classes.socialText}>Sign in with a social network</div>  
                            <div className={classes.socialBtns}>
                                <div className={classes.socialOne}><i class="fa-brands fa-facebook-f"></i></div>
                                <div className={classes.socialTwo}><i class="fa-brands fa-google"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
        </div>

    );
};