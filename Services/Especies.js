const Especie = require("../Models/EspeciesModel");

const Agregar = async (data) => new Especie(data).save();

const Editar = async (id, data) => Especie.findByIdAndUpdate(id, data, { new: true, select: "-createdAt -updatedAt" });

const Eliminar = async (id) => { await Especie.findByIdAndDelete(id); return { message: "La Especie ha sido exterminada"}; };

const ListaTodos = async (page = 1, limit = 10) => Especie.find({}, "-createdAt -updatedAt").skip((page - 1) * limit).limit(limit);

const ListaPersonaje = async () => Especie.find({}, "name");

const BuscarPorId = async (id) => Especie.findById(id, "-createdAt -updatedAt");

module.exports = { Agregar, Editar, Eliminar, ListaTodos, ListaPersonaje, BuscarPorId };