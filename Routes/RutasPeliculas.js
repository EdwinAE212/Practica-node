const express = require('express');
const router = express.Router();
const PeliculaServ = require('../Services/Peliculas')

router.post("/", async (req, res) => { try {
    res.json(await PeliculaServ.Agregar(req.body));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.put("/:id", async (req, res) => { try {
    res.json(await PeliculaServ.Editar(req.params.id, req.body));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.delete("/:id", async (req, res) => { try {
    res.json(await PeliculaServ.Eliminar(req.params.id));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/", async (req, res) => { try {
    res.json(await PeliculaServ.ListaTodos(req.query.page || 1));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/select", async (req, res) => { try {
    res.json(await PeliculaServ.ListaPersonaje());
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/:id", async (req, res) => { try {
    res.json(await PeliculaServ.BuscarPorId(req.params.id));
} catch (e) { res.status(400).json({ error: e.message});
} });

module.exports = router;