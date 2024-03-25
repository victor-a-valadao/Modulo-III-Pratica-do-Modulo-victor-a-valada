const express = require('express');
const ControllerFilme = require('../controllers/ControllerFilme');
const router = express.Router();

// CREATE
router.get("/Cadastrar", ControllerFilme.cadastrarFilme);
router.post("/Cadastrar", ControllerFilme.FilmeCreate);

// READ
router.get("/", ControllerFilme.listarFilmes);

// UPDATE
router.get("/update/:id_filme", ControllerFilme.UpdateFilme);
router.post("/update", ControllerFilme.FilmeUpdate);

// DELETE
router.post("/remover", ControllerFilme.removerFilme);

module.exports = router;