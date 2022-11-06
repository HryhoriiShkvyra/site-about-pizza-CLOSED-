import React from "react";
import News from "../../Components/news/News";
import ProductList from "../../Components/ProductList/ProductList";

export const Index = () => {
    return(
        <div>
            <News/>
            <ProductList title={'Best Price'}/>
            <div style={{
                textAlign: 'center', 
                margin: '1rem 30rem 2rem 0', 
                
                }}>
                * weight of just cooked product. The weight in delivery orders may differ due to dehydration of the product.
            </div>        
        </div>
        
    )
}