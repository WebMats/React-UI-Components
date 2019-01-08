import React from 'react';

import CardContainer from './components/CardComponents/CardContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import Footer from './components/FooterComponents/Footer';

import './App.css';


const App = () => {
  return (
    <div className="container">
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

export default App;
