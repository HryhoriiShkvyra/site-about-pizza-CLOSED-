import React from 'react'
import './Components/styles/Index.css'
import Header from './Components/header/Header';
import News from './Components/Pages/news/News';
import ProductBlock from './Components/Pages/ProductBlock/ProductBlock';
import ProductList from './Components/Pages/ProductList/ProductList';


function App() {
  return (
    <div className="App">
      <Header/>
      <News/>
      <ProductList/>
    </div>
  );
}

export default App;
