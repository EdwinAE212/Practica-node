const Planeta = require("../Models/PlanetasModel");

const Agregar = async (data) => new Planeta(data).save();

const Editar = async (id, data) => Planeta.findByIdAndUpdate(id, data, { new: true, select: "-createdAt -updatedAt" });

const Eliminar = async (id) => { await Planeta.findByIdAndDelete(id); return { message: "El planeta ha sido eliminado"}; };

const ListaTodos = async (page = 1, limit = 10) => Planeta.find({}, "-createdAt -updatedAt").skip((page - 1) * limit).limit(limit);

const ListaPersonaje = async () => Planeta.find({}, "name");

const BuscarPorId = async (id) => Planeta.findById(id, "-createdAt -updatedAt");

module.exports = { Agregar, Editar, Eliminar, ListaTodos, ListaPersonaje, BuscarPorId };