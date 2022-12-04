import { useState } from 'react';

import classes from './ProductButtons.module.css'





export const ProductBlockToggle__FlavorBlock = () => {

    const [isCrust, setIsCrust] = useState('thick')

    return(
        <div>
            <div className={classes.productBlockToggle__FlavorBlock}>
                <button onClick={() => setIsCrust('thick')} 
                className={isCrust === 'thick' ? classes.productBtnActive : classes.productBtn}>Thick crust</button>
                <button onClick={() => setIsCrust('thin')} 
                className={isCrust === 'thin' ? classes.productBtnActive : classes.productBtn}>Thin</button>
                <button onClick={() => setIsCrust('philadelphia')} 
                className={isCrust === 'philadelphia' ? classes.productBtnActive : classes.productBtn}>Philadelphia</button>
                <button onClick={() => setIsCrust('hot-dog')} 
                className={isCrust === 'hot-dog' ? classes.productBtnActive : classes.productBtn}>Hot-Dog crust</button>
            </div>
        </div>
    );
};

// export const SizeValue = [isSize, isCrust];
