import React from 'react';
import './App.scss';
import Header from './Header';
import Footer from './Footer';
import ButtonMenuSS from './ButtonMenuSS';
import './scss/main.css';
import Cocktail from './img/Cocktail.svg';
import Orders from './pages/Orders';
import News from './pages/News';


function App() {
  return ( <
    div className = "App" >
    <Header / >
    <Orders / >
    <Footer / >
    </div>
  );
}

export default App;
