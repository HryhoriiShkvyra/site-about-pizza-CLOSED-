import React from "react";
import classes from './ProductListDrinks.module.css';
import { ProductListWater } from '../../Data/Data';
import { ProductListTea } from '../../Data/Data'
import ProductDrinks from '../ProductDrinks/ProductDrinks'

const ProductListDrinks = ({ title, titleSecond}) => {

    const [sortWindowActive, setSortWindowActive] = React.useState(false)

    const sortWindow = () => {
        setSortWindowActive((active) => !active)
    } 

    const [sortingActive, setSortingActive] = React.useState(false)

    function sortWindowLowToHigh() {
        setSortingActive(sortingActive = false)
        console.log('low to high, ', sortingActive)
    }

    function sortWindowHighToLow() {
        setSortingActive(sortingActive = true)
        console.log('high to low, ', sortingActive)
    }
    

    return(
        <div>
            <div onClick={sortWindow} className={classes.sortBlock}>
                <div  className={classes.sort}>
                    <div className={classes.sortBtn}>Sort</div>
                    <i style={{left: '215px', top: '6px' , rotate: '270deg', color: '#888', position: 'absolute'}} 
                    class="fa-solid fa-signal"></i>
                </div> 
                <div className={sortWindowActive ? classes.sortWindowActive : classes.sortWindowNone}>
                    <button onClick={sortWindowLowToHigh} className={classes.sortWindowBtnFalse}>Price low-high</button>
                    <button onClick={sortWindowHighToLow} className={classes.sortWindowBtnTrue}>Price high-low</button>
                </div>              
            </div>
            <div className={classes.productListTitle}>
                <div>{title}</div>
                <div className={classes.productListTitleInfo}>
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
            </div>
                { sortingActive ?

                    <div className={classes.containerProductList}>
                        <div>
                            {ProductListWater.sort((a, b) => (a.price_1 > b.price_1) ? -1 : 1).map(product => 
                                <div key={product.id}>
                                    <ProductDrinks product={product}/>
                                </div>
                            )} 
                        </div>
                    </div>                    
                    :   
                    <div className={classes.containerProductList}>
                        <div>
                            {ProductListWater.sort((a, b) => (a.price_1 > b.price_1) ? 1 : -1).map(product => 
                                <div key={product.id}>
                                    <ProductDrinks product={product}/>
                                </div>
                            )} 
                        </div>
                    </div>   

                }
      
           {/* <div className={classes.containerProductList}>
                <div>
                    {ProductListWater.sort((a, b) => (a.price_1 > b.price_1) ? -1 : 1).map(product => 
                        <div key={product.id}>
                            <ProductDrinks product={product}/>
                        </div>
                    )} 
                </div>
            </div> */}

            {/* {ProductListWater.sort((a, b) => (a.price_1 > b.price_1) ? -1 : 1).map(product => 
                    <div key={product.id}>
                        <ProductDrinks product={product}/>
                    </div>
                )}  */}

      
            <div className={classes.productListTitle}>
                <div>{titleSecond}</div>
                <div className={classes.productListTitleInfo}>
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
            </div>
            <div className={classes.containerProductList}>
               {ProductListTea.map(product => 
                    <div key={product.id}>
                        <ProductDrinks product={product}/>
                    </div>
                )}
            </div>
            
        </div>
    );
};


export default ProductListDrinks;
