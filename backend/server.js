const express = require('express');
// import express from 'express';
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Producto = require('./models/Producto');

dotenv.config();

const app = express();

app.use(express.json()); // Nos permite aceptar datos en formato JSON en el req.body

app.get('/', (req, res) => {
    res.send("Server levantado correctamente!");
});

app.get('/api/productos', async (req, res) => {
    try {
        const productos = await Producto.find({});
        res.status(200).json({ success: true, data:productos });
    } catch(error) {
        console.error("Error en traer los productos: " + error.message);
        res.status(500).json({ success: false, message:"Error en el servidor"});
    }
})

app.post('/api/productos', async (req, res) => {
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
});

app.delete("/api/productos/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await Producto.findByIdAndDelete(id);
        res.status(200).json({ success: true, message:"Producto borrado" });
    } catch (error) {
        console.error("Error en borrar el producto: "+ error.message);
        res.status(404).json({ success: false, message:"Producto no encontrado" });
    }
});

console.log(process.env.MONGO_URI)

app.listen(5000, () => {
    connectDB();
    console.log("Servidor levantado en http://localhost:5000");
})