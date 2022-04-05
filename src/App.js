import React from 'react';
import './index.css';
import {BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom'
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Inicio from './components/Inicio';
import Civilizacion from './components/Civilizacion';


function App() {
  return (
    <Router>
      <div className="container mt-3">
        <h1>Ejemplo de NavBar...</h1>
        <div className='btn-group'>
           <Link to="/" className="btn btn-dark">Inicio</Link>
           <Link to="/contacto" className="btn btn-danger">contacto</Link>
           <Link to="/nosotros" className="btn btn-warning">nosotros</Link>
        </div>
        <hr/>

        <Switch>
          <Route path="/nosotros/:id">
            <Civilizacion/>
          </Route>
          <Route path="/" exact>
            <Inicio/>
          </Route>
          <Route path="/contacto">
            <Contacto/>
          </Route>
          <Route path="/nosotros">
            <Nosotros/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
