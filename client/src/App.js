import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import Warrior from "./components/layout/Warrior";
import Warriors from "./components/layout/Warriors";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Main} />
          <Route exact path="/warriors" component={Warriors} />
          <Route exact path="/warrior/:id" component={Warrior} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
