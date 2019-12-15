import React, { Component } from 'react';
import Routes from './routes'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { BrowserRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar/>
          <Routes />
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
