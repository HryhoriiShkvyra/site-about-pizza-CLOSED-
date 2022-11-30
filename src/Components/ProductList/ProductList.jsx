import React from "react";
import ProductBlock from "../ProductBlock/ProductBlock";
import classes from './ProductList.module.css';
import pizzaManhattan from '../../Assets/pizza/pizzaManhattan.jpg';
import pizzaPepperoniWithTomatoes from '../../Assets/pizza/pizzaPepperoniWithTomatoes.jpg';
import pizzaHamMushrooms from '../../Assets/pizza/pizzaHam&Mushrooms.jpg';
import pizzaTexas from '../../Assets/pizza/pizzaTexas.jpg';
import pizzaTonyPepperoni from '../../Assets/pizza/pizzaTonyPepperoni.jpg';
import pizzaMargarita from '../../Assets/pizza/pizzaMargarita.jpg';
import pizzaBBQ from '../../Assets/pizza/pizzaBBQ.jpg';
import pizzaGrillMix from '../../Assets/pizza/pizzaGrillMix.jpg';
import pizzaCarbonara from '../../Assets/pizza/pizzaCarbonara.jpg';
import pizzaCountry from '../../Assets/pizza/pizzaCountry.jpg';


const ProductList = ({title, isItemsCount, setIsItemsCount}) => {

    const productList = ([
        {id: 'pizzaManhattan',
        title: 'Pizza Manhattan',
        photo: pizzaManhattan,
        ingredients: `(double serving of mushrooms), Mushrooms, Mozarella, Peperoni, Al'fredo sauce`,
        },
        {id: 'pizzaPepperoniWithTomatoes',
        title: 'Pizza Pepperoni with tomatoes',
        photo: pizzaPepperoniWithTomatoes,
        ingredients: `Mozarella, Peperoni, Tomatoes, BBQ sauce`,
        },
        {id: 'pizzaHamMushrooms',
        title: 'Pizza Ham & mushrooms',
        photo: pizzaHamMushrooms,
        ingredients: `Ham, Mushrooms, Mozarella, Domino's sauce`,
        },
        {id: 'pizzaTexas',
        title: 'Pizza Texas',
        photo: pizzaTexas,
        ingredients: `Corn, Onion, Mushrooms, Bavarian sausages, Mozarella, BBQ sauce`,
        },
        {id: 'pizzaTonyPepperoni',
        title: 'Pizza Tony Pepperoni',
        photo: pizzaTonyPepperoni,
        ingredients: `Mozarella, Peperoni, Domino's sauce`,
        },
        {id: 'pizzaMargarita',
        title: 'Pizza Margarita',
        photo: pizzaMargarita,
        ingredients: `(double serving of mozarella), Mozarella, Domino's sauce`,
        },
        {id: 'pizzaBBQ',
        title: 'Pizza BBQ',
        photo: pizzaBBQ,
        ingredients: `Chicken, Onion, Bacon, Mushrooms, Mozarella, BBQ sauce`,
        },
        {id: 'pizzaGrillMix',
        title: 'Pizza Grill Mix',
        photo: pizzaGrillMix,
        ingredients: `Chicken, Meatballs, Onion, Bacon, Sweet pepper, Mozarella, BBQ saucee`,
        },
        {id: 'pizzaCarbonara',
        title: 'Pizza Carbonara',
        photo: pizzaCarbonara,
        ingredients: `Onion, Bacon, Ham, Mushrooms, Mozarella, Al'fredo sauce`,
        },
        {id: 'pizzaCountry',
        title: 'Pizza Country',
        photo: pizzaCountry,
        ingredients: `Onion, Bacon, Ham, Mushrooms, Mozarella, Pickled cucumbers, Garlic sauce`,
        },
    ])




    return(
        <div>
           <div className={classes.productListTitle}>
                <div>{title}</div>
                <div className={classes.productListTitleInfo}>
                    <i class="fa-solid fa-circle-exclamation"></i>
                </div>
           </div>
           <div className={classes.containerProductList}>

            {productList.map((product, index) => {
                <div key={product.id} >
                    <ProductBlock isItemsCount={isItemsCount} setIsItemsCount={setIsItemsCount} product={product}/>
                </div>
            })

            }
                {/* <ProductBlock isItemsCount={isItemsCount} setIsItemsCount={setIsItemsCount}/>
                <ProductBlock isItemsCount={isItemsCount} setIsItemsCount={setIsItemsCount}/> */}
               
           </div>
            
        </div>
    );
};


export default ProductList;
