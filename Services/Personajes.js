const Personaje = require("../Models/PersonajesModel");

const Agregar = async (data) => new Personaje(data).save();

const Editar = async (id, data) => {
    const mongoose = require("mongoose");
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return { mensaje: "No se encontró el personaje con ese ID" };
    }

    const result = await Personaje.findByIdAndUpdate(id, data, { new: true, select: "-createdAt -updatedAt" });
    if (!result) {
        return { mensaje: "No se encontró el personaje con ese ID" };
    }
    return result;
};

const Eliminar = async (id) => {
    const mongoose = require("mongoose");
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return { mensaje: "No se encontró el personaje con ese ID" };
    }

    const result = await Personaje.findByIdAndDelete(id);
    if (!result) {
        return { mensaje: "No se encontró el personaje con ese ID" };
    }
    return { message: "El personaje ha sido eliminado" };
};

const ListaTodos = async (page = 1, limit = 10) => Personaje.find({}, "-createdAt -updatedAt").skip((page - 1) * limit).limit(limit);
const Contar = async () => Personaje.countDocuments();

const BuscarNombre = async (name) => {
    const resultados = await Personaje.find({ name: new RegExp(name, "i") }, "-createdAt -updatedAt");

    if (!resultados || resultados.length === 0) {
        return { mensaje: "No se encontraron personajes con ese nombre" };
    }

    return resultados;
};

const BuscarPorId = async (id) => {
    const mongoose = require("mongoose");
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return { mensaje: "No se encontró el personaje con ese ID" };
    }

    const result = await Personaje.findById(id, "-createdAt -updatedAt");
    if (!result) {
        return { mensaje: "No se encontró el personaje con ese ID" };
    }
    return result;
};

module.exports = { Agregar, Editar, Eliminar, ListaTodos, BuscarNombre, BuscarPorId, Contar };