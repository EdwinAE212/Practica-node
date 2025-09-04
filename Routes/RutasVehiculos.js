const express = require('express');
const router = express.Router();
const VehiculoServ = require('../Services/Vehiculos')

router.post("/", async (req, res) => { try {
    res.json(await VehiculoServ.Agregar(req.body));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.put("/:id", async (req, res) => { try {
    res.json(await VehiculoServ.Editar(req.params.id, req.body));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.delete("/:id", async (req, res) => { try {
    res.json(await VehiculoServ.Eliminar(req.params.id));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/", async (req, res) => { try {
    res.json(await VehiculoServ.ListaTodos(req.query.page || 1));
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/select", async (req, res) => { try {
    res.json(await VehiculoServ.ListaPersonaje());
} catch (e) { res.status(400).json({ error: e.message});
} });

router.get("/:id", async (req, res) => { try {
    res.json(await VehiculoServ.BuscarPorId(req.params.id));
} catch (e) { res.status(400).json({ error: e.message});
} });

module.exports = router;