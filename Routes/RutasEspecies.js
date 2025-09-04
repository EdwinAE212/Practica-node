const express = require('express');
const router = express.Router();
const EspecieServ = require('../Services/Especies')

router.post("/", async (req, res) => { try {
    res.json(await EspecieServ.Agregar(req.body));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.put("/:id", async (req, res) => { try {
    res.json(await EspecieServ.Editar(req.params.id, req.body));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.delete("/:id", async (req, res) => { try {
    res.json(await EspecieServ.Eliminar(req.params.id));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/", async (req, res) => { try {
    res.json(await EspecieServ.ListaTodos(req.query.page || 1));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/select", async (req, res) => { try {
    res.json(await EspecieServ.ListaPersonaje());
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/:id", async (req, res) => { try {
    res.json(await EspecieServ.BuscarPorId(req.params.id));
} catch (e) { res.status(400).json({ error: e.message});
} });

module.exports = router;