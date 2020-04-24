import './App.scss';
import { BrowserRouter, Route } from 'react-router-dom';
import About from '../src/screens/About';
import Card from './components/card/Card';
import Contact from '../src/screens/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from '../src/screens/Home';
import CreatePost from '../src/screens/CreatePost';
import CreateMainPost from './screens/CreateMainPost';
import React from 'react';
import { SessionProvider } from './context/SessionContext';
import Sidebar from './components/sidebar/Sidebar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

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
              <PrivateRoute exact path="/NewPost" component={CreatePost} />
              <PrivateRoute
                exact
                path="/NewMainPost"
                component={CreateMainPost}
              />
            </Card>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </SessionProvider>
  );
}

export default App;
