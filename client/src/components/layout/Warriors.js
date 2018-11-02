// Importando bibliotecas e algumas coisas importantes para o router
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

// Declarando classe
class Warriors extends Component {
  // Declarando o que terá no estado do componente
  state = {
    // O "atributo" warriors é um array vazio pois será cheio pelos warrior que vem da API
    warriors: []
  };

  // Quando o componente for "montado", fará uma get request e adiciona todos warriors no array do estado.
  componentDidMount() {
    axios.get("/warriors").then(res => {
      const warriors = res.data;
      this.setState({ warriors });
    });
  }

  // Handler para apagar um warrior
  onDeleteClick = id => {
    // Faz delete request para a api com a id do warrior na url
    axios.delete(`/warriors/${id}`);
    // Após fazer a request, ele recarrega a pagina
    window.location.reload();
  };

  render() {
    return (
      <div className="warriors">
        <h1 className="titles">Warriors</h1>
        <Link to={"/create"} className="btn btn-primary">
          Create new Warrior
        </Link>
        {this.state.warriors.map((warrior, key) => (
          <div key={key} className="warrBox mt-2 pb-2">
            <h3>Nome: {warrior.nome}</h3>
            <h4>Idade: {warrior.idade}</h4>
            <h5>Habilidades: {warrior.habilidades.join(",")}</h5>
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
            <button
              className="btn btn-danger"
              onClick={this.onDeleteClick.bind(this, warrior._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(Warriors);
