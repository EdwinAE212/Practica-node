const Pelicula = require("../Models/PeliculasModel");
const Personaje = require("../Models/PersonajesModel");

const Agregar = async (data) => new Pelicula(data).save();

const Editar = async (id, data) => {
    const mongoose = require("mongoose");
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return { mensaje: "No se encontró la película con ese ID" };
    }

    const result = await Pelicula.findByIdAndUpdate(id, data, { new: true, select: "-createdAt -updatedAt" });
    if (!result) {
        return { mensaje: "No se encontró la película con ese ID" };
    }
    return result;
};

const Eliminar = async (id) => {
    const mongoose = require("mongoose");
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return { mensaje: "No se encontró la película con ese ID" };
    }

    const result = await Pelicula.findByIdAndDelete(id);
    if (!result) {
        return { mensaje: "No se encontró la película con ese ID" };
    }
    return { message: "La película ha sido eliminada" };
};

const ListaTodos = async (page = 1, limit = 10) => Pelicula.find({}, "-createdAt -updatedAt").skip((page - 1) * limit).limit(limit);
const Contar = async () => Pelicula.countDocuments();

const ListaPersonaje = async (name) => {
    const personaje = await Personaje.findOne({ 
        name: { $regex: name, $options: "i" } 
    }).populate({
        path: "films",           
        select: "_id title"  
    });

    if (!personaje || !personaje.films || personaje.films.length === 0) {
        return { mensaje: "No se encontró ese personaje o no tiene películas asociadas, intente con otro nombre" };
    }

    return personaje.films;
};


const BuscarPorId = async (id) => {
    const mongoose = require("mongoose");
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return { mensaje: "No se encontró la película con ese ID" };
    }

    const result = await Pelicula.findById(id, "-createdAt -updatedAt");
    if (!result) {
        return { mensaje: "No se encontró la película con ese ID" };
    }
    return result;
};

module.exports = { Agregar, Editar, Eliminar, ListaTodos, Contar, ListaPersonaje, BuscarPorId };