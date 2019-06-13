import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import './scss/main.css';
import Orders from './pages/Orders';
import News from './pages/News';

function App() {
  return ( <
    div className = "App" >
    <Orders / >
    <Footer / >
    </div>
  );
}

export default App;
