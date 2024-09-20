const express = require('express');
// import express from 'express';
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productoRoute = require('./routes/productoRoute');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Nos permite aceptar datos en formato JSON en el req.body

app.get('/', (req, res) => {
    res.send("Server levantado correctamente!");
});

app.use('/api/productos', productoRoute);

console.log(process.env.MONGO_URI)

app.listen(PORT, () => {
    connectDB();
    console.log("Servidor levantado en http://localhost:"+PORT);
})