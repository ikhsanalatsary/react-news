import React, { Component } from "react";
import logo from "./logo.svg";
import Button from "./modules/Button";
import P from "./modules/P";
import "./App.css";

const key = "955db8c26f4244ecb849f3e11da6b2e4";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <P>Hallow React</P>
        <Button>Custome</Button>
      </div>
    );
  }
}

export default App;
