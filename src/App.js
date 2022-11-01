import React, {useState} from 'react'
import './Components/styles/Index.css'
import Header from './Components/header/Header';
import News from './Components/Pages/news/News';
import ProductBlock from './Components/Pages/ProductBlock/ProductBlock';
import ProductList from './Components/Pages/ProductList/ProductList';
import Footer from './Components/Pages/Footer/Footer';
import {Modal} from './Components/modal/Modal';





function App() {

  const [modal, setModal] = useState(false)



  return (
    <div className="App">
      <Header/>
      <News/>
      <Modal visible={modal} setVisible={setModal}/>
      <ProductList title={'Best Price'}/>
      <div style={{
        textAlign: 'center', 
        margin: '1rem 30rem 2rem 0', 
        
        }}>
        * weight of just cooked product. The weight in delivery orders may differ due to dehydration of the product.
      </div>
      <Footer/>
    </div>
  );
}

export default App;
