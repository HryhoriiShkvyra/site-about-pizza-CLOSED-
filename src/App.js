import React, {useState} from 'react'
import './Components/styles/Index.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/header/Header';
import News from './Components/news/News';
import ProductBlock from './Components/ProductBlock/ProductBlock';
import ProductList from './Components/ProductList/ProductList';
import Footer from './Components/Footer/Footer';
import {Modal} from './Components/modal/Modal';
import {ModalSecond} from './Components/modalSecond/Modal'
import { Index } from './Pages/Index/Index';





function App() {

  const [modal, setModal] = useState(false)



  return (
    <div className="App">
      {/* <Header/> */}
     
      <Index/>
      
      {/* <News/>
      <ProductList title={'Best Price'}/> */}
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
