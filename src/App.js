import React from 'react';
import './App.scss';
import Header from './Header';
import Footer from './Footer';
import './scss/main.css';
import Orders from './pages/Orders';
import News from './pages/News';

function App() {
  return ( <
    div className = "App" >
    <Header / >
    <News / >
    <Footer / >
    </div>
  );
}

export default App;
