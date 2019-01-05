import React, { Component } from "react";
import Styles from "./styles.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>COUNTER PICKER</h2>
        <input type="text" className="smartSearch"/>
        <button className="submitButton">&#x1F50D;</button>
        <p>Counters will be displayed here</p>

        <p className="hero-information">This will be displayed with flexbox 1:1 hero information</p>
      </div>
    );
  }
}

export default Home;
