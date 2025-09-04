const Nave = require("../Models/NavesModel");

const Agregar = async (data) => new Nave(data).save();

const Editar = async (id, data) => Nave.findByIdAndUpdate(id, data, { new: true, select: "-createdAt -updatedAt" });

const Eliminar = async (id) => { await Nave.findByIdAndDelete(id); return { message: "La Nave ha sido destruida"}; };

const ListaTodos = async (page = 1, limit = 10) => Nave.find({}, "-createdAt -updatedAt").skip((page - 1) * limit).limit(limit);

const ListaPersonaje = async () => Nave.find({}, "name");

const BuscarPorId = async (id) => Nave.findById(id, "-createdAt -updatedAt");

module.exports = { Agregar, Editar, Eliminar, ListaTodos, ListaPersonaje, BuscarPorId };