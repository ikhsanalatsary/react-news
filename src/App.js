import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Button from "./modules/Button";
import P from "./modules/P";
import SourceList from "./modules/sources/SourceList";
import NewsList from "./modules/news/NewsList";
import NotFound from "./modules/404";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

const key = "955db8c26f4244ecb849f3e11da6b2e4";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" component={SourceList} />
            <Route exact path="/news/:id" component={NewsList} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
