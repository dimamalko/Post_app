import './App.scss';
import Footer from '../src/components/footer/footer';
import Header from './components/header/header';
import Home from '../src/screens/Home';
import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import Card from './components/card/card';

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
