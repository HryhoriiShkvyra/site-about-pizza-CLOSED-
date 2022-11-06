import React from "react";
import { useState } from "react";
import classes from './Modal.module.css'

export const ModalSecond = ({visibleSecond, setVisibleSecond}) => {

    const rootClasses = [classes.modal]

    if (visibleSecond) {
        rootClasses.push(classes.active);
        console.log("registration modal")
    }

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [passwordRepeatDirty, setPasswordRepeatDirty] = useState(false)
    const [emailError, setEmailError] = useState('email can not be empty')
    const [passwordError, setPasswordError] = useState('password can not be empty')
    const [passwordRepeatError, setPasswordRepeatError] = useState('password can not be empty')

    // const blurHandler = (e) => {
    //     switch (e.target.name) {
    //         case 'email':
    //             setEmailDirty(true)
    //             break
    //         case 'password': 
    //             setPasswordDirty(true)
    //             break
    //         case 'repasword':
    //             setPasswordRepeatDirty(true)
    //             break
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email.length === 0) {
            setEmailError(true)
        }
        if (email && password) {
            console.log(email)
        }
    }




    return(
        <div className={rootClasses.join(' ')} onClick={() => setVisibleSecond(false)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                <div className={classes.modalInner}>
                    <div className={classes.modalTitle}>Registration</div>
                    <form onSubmit={handleSubmit} className={classes.modalForm}>
                        <input onChange={e => setEmail(e.target.value)} 
                        className={classes.formField} placeholder='enter your email'
                        />
                        {emailDirty&&email.length <= 0 ?
                        <label style={{fontSize: '0.7rem', color: 'red'}}>{emailError}</label>
                        : ''}
                        <input className={classes.formField} placeholder='enter your password'/>
                        <input className={classes.formField} placeholder='repeat your password'/>
                    </form>
                    <div className={classes.button}>Register</div>
                </div>
                <div className={classes.br}></div>
                <div onClick={() => setVisibleSecond(false)} className={classes.returnBtn}>Return to sign in</div>
            </div>
        </div>
    );
};