import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Warriors extends Component {
  state = {
    warriors: []
  };

  componentDidMount() {
    axios.get("/warriors").then(res => {
      const warriors = res.data;
      this.setState({ warriors });
    });
  }

  render() {
    return (
      <div className="warriors">
        <h1 className="titles">Warriors</h1>
        {this.state.warriors.map(warrior => (
          <div className="warrBox mt-2 pb-2">
            <h3>Nome: {warrior.nome}</h3>
            <h4>Idade: {warrior.idade}</h4>
            <h5>Habilidades: {warrior.habilidades.join(", ")}</h5>
            <h5>
              Atributos: Força[
              {warrior.atributos[0]}
              ], Resistência[
              {warrior.atributos[1]}
              ], Agilidade[
              {warrior.atributos[2]}
              ], Destreza[
              {warrior.atributos[3]}]
            </h5>
            <Link
              to={`/warrior/${warrior._id}`}
              className="btn btn-primary mr-3"
            >
              Update
            </Link>
            <button className="btn btn-danger">Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Warriors;
