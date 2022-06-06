var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.get("/voto", function (req, res) {
    usuarioController.voto(req, res);
});

router.get("/voto_dunk", function (req, res) {
    usuarioController.voto_dunk(req, res);
});

router.get("/pegar_link", function (req, res) {
    usuarioController.pegar_link(req, res);
});

router.get("/pegar_nome", function (req, res) {
    usuarioController.pegar_nome(req, res);
});
//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/mandar_link", function (req, res) {
    usuarioController.mandar_link(req, res);
})

router.post("/votar", function (req, res) {
    usuarioController.votar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;