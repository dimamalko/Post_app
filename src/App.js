import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import About from '../src/screens/About';
import Card from './components/card/Card';
import Contact from '../src/screens/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from '../src/screens/Home';
import React from 'react';
import { SessionProvider } from './context/SessionContext';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <SessionProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="flow">
            <Sidebar />
            <Card>
              <Route exact path="/Home" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
            </Card>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </SessionProvider>
  );
}

export default App;
