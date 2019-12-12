import React from 'react';
import Routes from './routes'
import Navbar from './components/navbar'
import Footer from './components/footer'
import './paginas/App.css';
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
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
