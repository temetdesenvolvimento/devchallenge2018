// Importando libs e coisas importantes
import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

// Criando classe para criar um warrior
class CreateWarrior extends Component {
  // Criando cronstrutor
  constructor(props) {
    super(props);
    // Definindo o estado do componente
    this.state = {
      nome: "",
      idade: "",
      habilidades: "",
      atributos: ""
    };

    // Métodos importantes, que resumidamente fazem os inputs serem "digitaveis"
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Método para mudar o valor do estado conforme o input muda
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // Método que será acionado quando o usuário enviar os dados
  onSubmit = event => {
    // Previnindo que o react acione isso acidentalmetne
    event.preventDefault();

    // Fazendo post request para criar um novo warrior
    axios.post("/warriors/post", {
      nome: this.state.nome,
      idade: this.state.idade,
      habilidades: this.state.habilidades,
      atributos: this.state.atributos
    });

    // Após a request, redireciona para a rota /warriors
    this.props.history.push("/warriors");
  };

  // Método render, todo JSX (html do react) fica.
  render() {
    return (
      <div className="warriorCont">
        <h1 className="titles pb-3">Create Warrior</h1>
        <form onSubmit={this.onSubmit} className="mt-3">
          <h5>Nome</h5>
          <input
            type="text"
            name="nome"
            onChange={this.onChange}
            value={this.state.nome}
            className="mb-2 w-25"
          />
          <h5 className="mb-2">Idade</h5>
          <input
            type="number"
            name="idade"
            value={this.state.idade}
            onChange={this.onChange}
            className="mb-2"
          />

          <h5> Habilidades (Separar com vírgula)</h5>
          <input
            type="text"
            name="habilidades"
            value={this.state.habilidades}
            onChange={this.onChange}
            className="mb-2 w-25"
          />

          <h5> Atributos (Separar com vírgula)</h5>
          <input
            type="text"
            name="atributos"
            value={this.state.atributos}
            onChange={this.onChange}
            className="mb-2 w-25"
          />
          <br />
          <button className="btn btn-primary">Create</button>
        </form>
      </div>
    );
  }
}
export default withRouter(CreateWarrior);
