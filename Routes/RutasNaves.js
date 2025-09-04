const express = require('express');
const router = express.Router();
const NaveServ = require('../Services/Naves')

router.post("/", async (req, res) => { try {
    res.json(await NaveServ.Agregar(req.body));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.put("/:id", async (req, res) => { try {
    res.json(await NaveServ.Editar(req.params.id, req.body));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.delete("/:id", async (req, res) => { try {
    res.json(await NaveServ.Eliminar(req.params.id));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/", async (req, res) => { try {
    res.json(await NaveServ.ListaTodos(req.query.page || 1));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/select", async (req, res) => { try {
    res.json(await NaveServ.ListaPersonaje());
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/:id", async (req, res) => { try {
    res.json(await NaveServ.BuscarPorId(req.params.id));
} catch (e) { res.status(400).json({ error: e.message});
} });

module.exports = router;