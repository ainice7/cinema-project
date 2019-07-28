import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import  MainContainer  from './components/Main/MainContainer';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
