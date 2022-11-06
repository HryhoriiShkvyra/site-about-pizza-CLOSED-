import React, {useState} from 'react'
import './Components/styles/Index.css'
import Header from './Components/header/Header';
import News from './Components/news/News';
import ProductBlock from './Components/ProductBlock/ProductBlock';
import ProductList from './Components/ProductList/ProductList';
import Footer from './Components/Footer/Footer';
import {Modal} from './Components/modal/Modal';
import {ModalSecond} from './Components/modalSecond/Modal'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Index } from './Pages/Index/Index';
import {Drinks} from './Pages/Drinks/Drinks'




function App() {

  const [modal, setModal] = useState(false)



  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='Drinks' element={<Drinks/>}/>
        </Routes>
      </BrowserRouter>

      
      <Footer/>
    </div>
  );
}

export default App;
