import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import RacePace from "./components/pages/RacePace";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/race-pace" component={RacePace} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
