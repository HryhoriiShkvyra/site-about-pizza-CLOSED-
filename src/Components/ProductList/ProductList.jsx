import React, {useState} from "react";
import ProductBlock from "../ProductBlock/ProductBlock";
import classes from './ProductList.module.css';
import { productListPizzaBestPrice } from '../../Data/Data';
import { productListPizzaHeroes } from '../../Data/Data';

const ProductList = ({ title, titleSecond, navBarActive }) => {

    const [sortingIsWindowActive, setSortingIsWindowActive] = useState(false)
    const sortingWindowActive = () => {
        setSortingIsWindowActive(sortingIsWindowActive => !sortingIsWindowActive)
        if(sortingIsWindowActive === false) {
            console.log('none')
        } else {
            console.log('display')
        };
    };

    const [isSorting, setIsSorting] = useState(true)
    // const sorting = () => {
    //     setIsSorting(sorting => !sorting)
    //     if(sorting === false) {
    //         console.log('sorting is true')
    //     } else {
    //         console.log('sorting is false')
    //     };
    // };





    return(
        <div >
            <div onClick={sortingWindowActive} className={classes.sortBlock}>
                <div  className={classes.sort}>
                    <div  className={classes.sortBtn}>Sort</div>
                    <i style={{left: '215px', top: '6px' , rotate: '270deg', color: '#888', position: 'absolute'}} 
                    class="fa-solid fa-signal"></i>
                </div> 
                <div  className={sortingIsWindowActive ? classes.sortWindow : classes.sortWindowNone}>
                    <button onClick={() => setIsSorting(false)} className={classes.sortWindowBtnFalse}>Price low-high</button>
                    <button onClick={() => setIsSorting(true)} className={classes.sortWindowBtnTrue}>Price high-low</button>
                </div>              
            </div>
                 

            <div className={classes.productListTitle}>
                <div>{title}</div>
                <div className={classes.productListTitleInfo}>
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
            </div>
           
            
            {
            isSorting ? 
                <div className={classes.containerProductList}>
                    {productListPizzaBestPrice.sort((a, b) => (a.price_1 > b.price_1) ? 1 : -1).map(product => 
                        <div key={product.id}>
                            <ProductBlock product={product}/>
                        </div>
                    )}
                </div>
                :
                <div className={classes.containerProductList}>
                    {productListPizzaBestPrice.sort((a, b) => (a.price_1 > b.price_1) ? -1 : 1).map(product => 
                        <div key={product.id}>
                            <ProductBlock product={product}/>
                        </div>
                    )}
                </div>
           }
            {/* <div className={classes.containerProductList}>
                {productListPizzaBestPrice.map(product => 
                    <div key={product.id}>
                        <ProductBlock product={product}/>
                    </div>
                )} 
            </div> */}
            
            <div className={classes.productListTitle}>
                <div>{titleSecond}</div>
                <div className={classes.productListTitleInfo}>
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
            </div>
            {
            isSorting ? 
                <div className={classes.containerProductList}>
                    {productListPizzaHeroes.sort((a, b) => (a.price_1 > b.price_1) ? 1 : -1).map(product => 
                        <div key={product.id}>
                            <ProductBlock product={product}/>
                        </div>
                    )}
                </div>
                :
                <div className={classes.containerProductList}>
                    {productListPizzaHeroes.sort((a, b) => (a.price_1 > b.price_1) ? -1 : 1).map(product => 
                        <div key={product.id}>
                            <ProductBlock product={product}/>
                        </div>
                    )}
                </div>
           }
            
        </div>
    );
};


export default ProductList;
