const Personaje = require("../Models/PersonajesModel");

const Agregar = async (data) => new Personaje(data).save();

const Editar = async (id, data) => Personaje.findByIdAndUpdate(id, data, { new: true, select: "-createdAt -updatedAt" });

const Eliminar = async (id) => { await Personaje.findByIdAndDelete(id); return { message: "El Vehiculo ha sido destruido"}; };

const ListaTodos = async (page = 1, limit = 10) => Personaje.find({}, "-createdAt -updatedAt").skip((page - 1) * limit).limit(limit);

const BuscarNombre = (name) => Personaje.find({ name: new RegExp(name, "i") }, "-createdAt -updatedAt");

const BuscarPorId = async (id) => Personaje.findById(id, "-createdAt -updatedAt");

module.exports = { Agregar, Editar, Eliminar, ListaTodos, BuscarNombre, BuscarPorId };