import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ImageTile from "./components/imageTile";
import Percent from "./components/percent";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <ImageTile />
          <Percent />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
