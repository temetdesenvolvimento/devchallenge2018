import React, { Component } from "react";
import axios from "axios";

export default class Warrior extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: "",
      idade: "",
      habilidades: [],
      atributos: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    axios.post(`/warriors/${this.props.match.params.id}`, {
      nome: this.state.nome,
      idade: this.state.idade,
      habilidades: this.state.habilidades.split(","),
      atributos: this.state.atributos.split(",")
    });
  };

  componentDidMount() {
    axios.get(`/warriors/${this.props.match.params.id}`).then(res => {
      this.setState({
        nome: res.data.nome,
        idade: res.data.idade,
        habilidades: res.data.habilidades,
        atributos: res.data.atributos
      });
    });
  }

  render() {
    return (
      <div className="warriorCont">
        <h1 className="titles pb-3">Warrior Update</h1>
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
        </form>
      </div>
    );
  }
}
