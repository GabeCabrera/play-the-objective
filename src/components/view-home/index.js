import React, { Component } from "react";
//import HeroList from "../../services/herolist";
import Search from "../../services/smartSearch";
import Styles from "./styles.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h2>COUNTER PICKER</h2>
        <Search className="smartSearch"></Search>
        {/* <HeroList></HeroList> */}
      </div>
    );
  }
}

export default Home;
