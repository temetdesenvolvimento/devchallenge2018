// Importando o pacote do mongoose e o Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Criando schema do guerreiro
const WarriorSchema = new Schema({
  // Nome: string e exigido
  nome: {
    type: String,
    required: true
  },
  // Idade: number e exigido
  idade: {
    type: Number,
    required: true
  },
  // Habilidades: array de strings, e requerido
  habilidades: {
    type: [String],
    required: true
  },
  // Atributos: array de numeros e requerido
  // Força, Resistencia, Agilidade e Destreza
  atributos: {
    type: [Number],
    required: true
  }
});

// Exportando o model do guerreiro
module.exports = Warrior = mongoose.model("warrior", WarriorSchema);
