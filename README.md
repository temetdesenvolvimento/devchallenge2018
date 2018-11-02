# DevChallenge2018 - TEMET

Basicamente um projeto para criar uma api que efetue cadastro de guerreiros e que possa criar, alterar e apagar do banco de guerreiros.

### Tecnologias Usadas

- JavaScript (Node.Js)
- MongoDB
- Express.Js
- React.Js

### Instalação

Para instalar e rodar esse projeto, siga os seguintes passos abaixo:

```sh
$ git clone https://github.com/lamecksilva/devchallenge2018.git
$ cd devchallenge2018/
$ npm install
$ npm run dev
```

OBS: Ele irá abrir seu navegador automaticamente.

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
  "habilidades": ["Super Apetite","Força Extrema","Alto Salto"],

  // Força, Resistência, Agilidade e Destreza, respectivamente
  "atributos": [5,3,3,2]
}
```

- GET `http://localhost:5000/warriors/:id` - Devolver dados de um guerreiro passando seu id via URL

- POST `http://localhost:5000/warriors/:id` - Atualizar dados de um guerreiro passando seu id (gerado pelo mongoDB) na URL e colocando os novos dados como no exemplo acima.

- DELETE `http://localhost:5000/warriors/:id` - Apagar um guerreiro utilizando seu id.

## Interface de usuário

Para a interface visual, usei a lib react.js, com algumas outras libs para ajudar no uso, como o react-router(rotas para o react), axios (http request), entre outras.

## Screenshots

#### Rota /

Rota raiz onde têm um pouco sobre mim
![image](https://user-images.githubusercontent.com/31391753/47935668-f9704280-deb9-11e8-9a3b-f0d2a2e6ed15.png "rota /")

#### Rota /warriors

Rota que lista todos os guerreiros do banco de dados
![image](https://user-images.githubusercontent.com/31391753/47935734-3e947480-deba-11e8-9133-983f600e99bc.png "rota /warriors")

#### Rota /create

Rota com campos para criação de um novo warrior
![image](https://user-images.githubusercontent.com/31391753/47935823-78657b00-deba-11e8-88d4-424fbad104e5.png "rota /create")

#### Rota /:id

Rota com campos para alteração do warrior
![image](https://user-images.githubusercontent.com/31391753/47935857-94691c80-deba-11e8-94f7-87e427dc4fdd.png "rota /:id")
