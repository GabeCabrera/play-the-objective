import React, { Component } from 'react';
import HeroSearch from '../../services/heroSearch';
import './styles.css';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>COUNTER PICKER</h2>
          <HeroSearch/>
      </div>
    );
  }
}

export default Home;
