const Producto = require('../models/Producto');
const mongoose = require('mongoose');

const traerProductos = async (req, res) => {
    try {
        const productos = await Producto.find({});
        res.status(200).json({ success: true, data:productos });
    } catch(error) {
        console.error("Error en traer los productos: " + error.message);
        res.status(500).json({ success: false, message:"Error en el servidor"});
    }
}


const crearProducto = async (req, res) => {
    const producto = req.body; // Info enviada por el usuario

    if (!producto.nombre || !producto.precio || !producto.imagen){
        return res.status(400).json({ success: false, message:"Por favor, complete todos los campos"});
    }

    const nuevoProducto = new Producto(producto);

    try {
        await nuevoProducto.save();
        res.status(201).json({ success:true, data: nuevoProducto });
    } catch (error) {
        console.error("Error en crear el producto: " + error.message);
        res.status(500).json({ success:false, message:"Error en el server" })
    }
}


const borrarProducto = async (req, res) => {
    const { id } = req.params;

    try {
        await Producto.findByIdAndDelete(id);
        res.status(200).json({ success: true, message:"Producto borrado" });
    } catch (error) {
        console.error("Error en borrar el producto: "+ error.message);
        res.status(404).json({ success: false, message:"Producto no encontrado" });
    }
}


const actualizarProducto = async (req, res) => {
    const { id } = req.params;

    const producto = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ success:false, message:"Id de producto no encontrado" });
    }

    try {
        const productoActualizado = await Producto.findByIdAndUpdate(id, producto, {new:true});
        res.status(200).json({ success:true, data:productoActualizado });
    } catch (error) {
        console.error()
        res.status(500).json({success:false, message:"Error en el server"});
    }
}

module.exports = {
    traerProductos,
    crearProducto,
    borrarProducto,
    actualizarProducto
};