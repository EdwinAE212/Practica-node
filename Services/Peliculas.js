const Pelicula = require("../Models/PeliculasModel");

const Agregar = async (data) => new Pelicula(data).save();

const Editar = async (id, data) => Pelicula.findByIdAndUpdate(id, data, { new: true, select: "-createdAt -updatedAt" });

const Eliminar = async (id) => { await Pelicula.findByIdAndDelete(id); return { message: "La pelicula ha sido eliminada"}; };

const ListaTodos = async (page = 1, limit = 10) => Pelicula.find({}, "-createdAt -updatedAt").skip((page - 1) * limit).limit(limit);

const ListaPersonaje = async () => Pelicula.find({}, "title");

const BuscarPorId = async (id) => Pelicula.findById(id, "-createdAt -updatedAt");

module.exports = { Agregar, Editar, Eliminar, ListaTodos, ListaPersonaje, BuscarPorId };