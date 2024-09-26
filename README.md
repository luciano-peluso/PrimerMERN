# MERN CRUD de Productos
Este es un proyecto de ejemplo construido con el stack MERN (MongoDB, Express, React, Node.js) que permite gestionar un CRUD (Crear, Leer, Actualizar y Eliminar) de productos. La interfaz de usuario está diseñada con Chakra UI para un estilo moderno y responsivo.

## Características
- Crear nuevos productos.
- Leer la lista de productos disponibles.
- Actualizar información de un producto existente.
- Eliminar productos.

## Tecnologías utilizadas
Aunque ya lo sabemos, el stack MERN refiere a:
- MongoDB: Base de datos NoSQL para almacenar los productos.
- Express: Framework para construir el backend en Node.js.
- React: Librería de frontend para construir la interfaz de usuario.
- Node.js: Entorno de ejecución para el backend.

  Lo que agregué para el desarrollo del front fue:
- Chakra UI: Librería de componentes para React que facilita el desarrollo de interfaces modernas y accesibles.
  
## Requisitos previos
Antes de comenzar, asegúrate de tener lo siguiente instalado en tu sistema:

- Node.js
- MongoDB

## Instalación y configuración
Clona este repositorio en tu máquina:

`git clone https://github.com/tu-usuario/tu-repo.git`

Dirígete a la carpeta del proyecto:
`cd nombre-del-proyecto`

Instala las dependencias tanto en el servidor como en el cliente:

### Para el backend
`cd ../backend
npm install`

### Para el frontend
`cd ../frontend
npm install`

Inicia el servidor y el cliente:

### En la carpeta del backend y del frontend
`npm run dev`
Esto iniciará el servidor en http://localhost:5000 y el cliente en http://localhost:5173.

## Endpoints de la API
La API se basa en el CRUD de productos, siendo bastantes sencillos sus endpoints como:
- GET /api/productos
- POST /api/productos
- PUT /api/productos/{id}
- DELETE /api/productos/{id}

## Licencia
Este proyecto está bajo la licencia MIT. Puedes consultar más detalles en el archivo LICENSE.
