const express = require('express');
const router = express.Router();
const PlanetaServ = require('../Services/Planetas')

router.post("/", async (req, res) => { try {
    res.json(await PlanetaServ.Agregar(req.body));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.put("/:id", async (req, res) => { try {
    res.json(await PlanetaServ.Editar(req.params.id, req.body));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.delete("/:id", async (req, res) => { try {
    res.json(await PlanetaServ.Eliminar(req.params.id));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/", async (req, res) => { try {
    res.json(await PlanetaServ.ListaTodos(req.query.page || 1));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/select", async (req, res) => { try {
    res.json(await PlanetaServ.ListaPersonaje());
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/:id", async (req, res) => { try {
    res.json(await PlanetaServ.BuscarPorId(req.params.id));
} catch (e) { res.status(400).json({ error: e.message});
} });

module.exports = router;