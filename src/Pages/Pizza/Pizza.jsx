import React from "react";
import News from "../../Components/news/News";
import ProductList from "../../Components/ProductList/ProductList";
import classes from './Pizza.module.css'



export const Pizza = ({isItemsCount, setIsItemsCount, navBarActive, setNavBarActive}) => {
    return(
        <div>
            { navBarActive === 'index' ?
                <News/>
            :
                null

            }
            <ProductList title={'Pizza Best price'} isItemsCount={isItemsCount} setIsItemsCount={setIsItemsCount}/>
        </div>
    );
};