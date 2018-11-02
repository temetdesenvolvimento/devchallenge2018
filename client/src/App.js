// Importando react e alguns componentes
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import Warrior from "./components/layout/Warrior";
import Warriors from "./components/layout/Warriors";

// importando pacotes importantes para colocar rotas no react
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateWarrior from "./components/layout/CreateWarrior";

class App extends Component {
  render() {
    // Criando "container" para o app com rotas, o router
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Main} />{" "}
          {/* Rota para os componentes */}
          <Route exact path="/create" component={CreateWarrior} />
          <Route exact path="/warriors" component={Warriors} />
          <Route exact path="/warrior/:id" component={Warrior} />{" "}
          {/* Essa rota possui um :id, que varia dependendo do id do warrior */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
