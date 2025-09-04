const Vehiculo = require("../Models/VehiculosModel");

const Agregar = async (data) => new Vehiculo(data).save();

const Editar = async (id, data) => Vehiculo.findByIdAndUpdate(id, data, { new: true, select: "-createdAt -updatedAt" });

const Eliminar = async (id) => { await Vehiculo.findByIdAndDelete(id); return { message: "El Vehiculo ha sido destruido"}; };

const ListaTodos = async (page = 1, limit = 10) => Vehiculo.find({}, "-createdAt -updatedAt").skip((page - 1) * limit).limit(limit);

const ListaPersonaje = async () => Vehiculo.find({}, "name");

const BuscarPorId = async (id) => Vehiculo.findById(id, "-createdAt -updatedAt");

module.exports = { Agregar, Editar, Eliminar, ListaTodos, ListaPersonaje, BuscarPorId };