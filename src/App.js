import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from '../src/screens/Home';
import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flow">
        <Sidebar />
        <Card>
          <Home />
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default App;
