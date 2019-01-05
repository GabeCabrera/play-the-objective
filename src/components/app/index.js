import React, { Component } from 'react';
import Styles from './styles.css';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from 'components/view-home';
import About from 'components/view-about';
import Contact from 'components/view-contact';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="header">
          <h1>PLAY THE OBJECTIVE</h1>
          <ul className="topNav">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} className="linkItem"/>
            <Route path="/about" component={About} className="linkItem" />
            <Route path="/contact" component={Contact} className="linkItem"/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
