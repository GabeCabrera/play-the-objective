import React, { Component } from "react";
import HeroList from "../../services/herolist";
import Styles from "./styles.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>COUNTER PICKER</h2>
        <input type="text" className="smartSearch"/>
        <button className="submitButton">&#x1F50D;</button>
        <p>Information</p>

        <HeroList></HeroList>
      </div>
    );
  }
}

export default Home;
