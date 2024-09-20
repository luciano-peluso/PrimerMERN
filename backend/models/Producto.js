const mongoose = require('mongoose');

const esquemaProducto = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,

    },
    precio: {
        type: Number,
        required: true,
    },
    imagen: {
        type: String,
        required: true,
    }
}, {
    timestamps: true    // Crea los campos "Created at" y "Updated at"
});

const Producto = mongoose.model('Producto', esquemaProducto);

module.exports = Producto;