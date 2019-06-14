import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { HashRouter } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <HashRouter>

        <Header />
        {routes}
      </HashRouter>
    </div>
  );
}

export default App;
