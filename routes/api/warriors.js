const express = require("express");
const router = express.Router();

// Model do schema
const Warrior = require("../../models/warrior");

// @route   GET warriors
// @desc    Listando todos guerreiros
// @access  Public
router.get("/warriors", (req, res) => {
  Warrior.find().then(warriors => res.json(warriors));
});

// @route   POST warriors/post
// @desc    Criando um guerreiro
// @access  Public
router.post("/warriors/post", (req, res) => {
  new Warrior({
    nome: req.body.nome,
    idade: req.body.idade,
    habilidades: req.body.habilidades.split(","),
    atributos: req.body.atributos.split(",")
  })
    .save()
    .then(warrior => res.json(warrior));
});

// @route   POST warriors/:id
// @desc    Atualizando um guerreiro
// @access  Public
router.post("/warriors/:id", (req, res) => {
  Warrior.findOneAndUpdate(req.params.id, {
    nome: req.body.nome,
    idade: req.body.idade,
    habilidades: req.body.habilidades.split(","),
    atributos: req.body.atributos.split(",")
  })
    .then(warrior => res.json(warrior))
    .catch(err => res.status(400).json(err));
});

// @route   DELETE warriors/:id
// @desc    Deletando um guerreiro
// @access  Public
router.delete("/warriors/:id", (req, res) => {
  Warrior.findOneAndRemove(req.params.id)
    .then(res.json({ success: true }))
    .catch(err => res.json(err));
});

module.exports = router;
