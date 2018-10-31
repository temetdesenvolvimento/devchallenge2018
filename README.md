# DevChallenge2018 - TEMET

Basicamente um projeto para criar uma api que efetue cadastro de guerreiros e que possa criar, alterar e apagar do banco de guerreiros.

### Tecnologias Usadas

- JavaScript (Node.Js)
- MongoDB
- Express.Js

### Instalação

Para instalar e rodar esse projeto, siga os seguintes passos abaixo:

```sh
$ git clone https://github.com/lamecksilva/devchallenge2018.git
$ cd devchallenge2018/
$ npm install
$ npm start
```

### Funcionamento

Basicamente os guerreiros ficam armazenados em um banco de dados na cloud (MongoDB - Mlab), e o usuário pode visualizar todos guerreiros em formato json, pode cadastrar um novo guerreiro, alterar ou apagar o mesmo.

#### Rotas:

- GET `http://localhost:5000/warriors` - Devolve todos os guerreiros do banco de dados em formato JSON.
- POST `http://localhost:5000/warriors/post` - Cadastro de um novo guerreiro, inserindo os dados no seguinte formato:

```
Exemplo:
{
  "nome": "Joãozinho",
  "idade": 23,
  "habilidades": ["Super Hapetite","Força Extrema","Alto Salto"],

  // Força, Resistência, Agilidade e Destreza, respectivamente
  "atributos": [5,3,3,2]
}
```

- POST `http://localhost:5000/warriors/:id` - Atualizar dados de um guerreiro passando seu id (gerado pelo mongoDB) na URL e colocando os novos dados como no exemplo acima.

- DELETE `http://localhost:5000/warriors/:id` - Apagar um guerreiro utilizando seu id.


obs: Irei adicionar uma pagina react para facilitar o uso dessa api em breve, coisa rápida....
