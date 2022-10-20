import React from 'react'
import './Components/styles/Index.css'
import Header from './Components/header/Header';
import News from './Components/Pages/news/News';
import ProductList from './Components/Pages/Cards/Card';


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
