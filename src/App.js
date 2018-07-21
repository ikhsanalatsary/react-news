import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import logo from "./logo.svg";
import Button from "./modules/Button";
import P from "./modules/P";
import SourceList from "./modules/sources/SourceList";
import NewsList from "./modules/news/NewsList";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

const key = "955db8c26f4244ecb849f3e11da6b2e4";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          {/*<SourceList />*/}
          <NewsList />
        </Container>
      </div>
    );
  }
}

export default App;
