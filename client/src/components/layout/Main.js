import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div className="mainjs container-fluid">
        <h1 className="text-center pt-3 pb-3 titles">Um pouco sobre mim</h1>
        <h3 className="text-center lmktxt pt-3">
          Meu nome é lameck, sou estudante de engenharia da computação na
          unifacs, começei a programar/desenvolver web no final de 2017 e venho
          tendo bastante progresso desde lá.
          <br />A linguagem que tenho mais experiência/habilidade é JavaScript,
          uso tanto para front end ou back end, pretendo aprender a usar outras
          linguagens como python(Flask, Django) e php(Laravel) em breve.
          <br />
          Já fiz alguns projetos com API's, Node.js, React.js, Express.js e
          muito mais... que podem ser acessadas aqui:{" "}
          <a href="https://lamecksilva.github.io">Lameck Silva</a>
        </h3>
      </div>
    );
  }
}

export default Main;
