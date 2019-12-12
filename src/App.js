import React from 'react';
import Routes from './routes'
import './paginas/App.css';
import { BrowserRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <h1>Local da NavBar</h1>
          <Routes />
          <h1>Local do Footer</h1>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
