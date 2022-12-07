import React from "react";
import classes from './Pizza.module.css'
import News from "../../Components/news/News";
import ProductList from "../../Components/ProductList/ProductList";

export const Pizza = ({isItemsCount, setIsItemsCount, navBarActive, setNavBarActive}) => {
    return(
        <div>
            { navBarActive === 'index' ?
                <News/>
            :
                null

            }
            <ProductList title={'Pizza Best price'} titleSecond={'same title'} navBarActive={navBarActive}/>
        </div>
    );
};
