import React from "react";
import classes from './Sides.module.css'
import ProductListSides from "../../Components/ProductListSides/ProductListSide";



const Sides = () => {
    return(
        <div className={classes.container}>
            <ProductListSides title={'Combo-box'} titleSecond={'Bread'}/>
        </div>
    );
};

export default Sides;