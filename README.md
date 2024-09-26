# MERN CRUD de Productos
Este es un proyecto de práçtica construido con el stack MERN que permite gestionar un CRUD de productos. La interfaz de usuario está hecha con Chakra UI para un estilo moderno y responsive (y para practicar librerías de diseño). 

## Características
El proyecto es básico, son 2 páginas donde uno puede:
- Crear nuevos productos.
- Leer la lista de productos disponibles.
- Actualizar información de un producto existente.
- Borrar productos.

## Tecnologías utilizadas
Aunque ya lo sabemos, el stack MERN refiere a:
- MongoDB: Base de datos NoSQL para almacenar los productos.
- Express: Framework para construir el backend en Node.js.
- React: Librería de frontend para construir la interfaz de usuario.
- Node.js: Entorno de ejecución para el backend.

Lo que agregué para el desarrollo del front fue:
- Chakra UI: Que es una librería de componentes para React que facilita el desarrollo de interfaces.
  
## Requisitos previos
Para usarlo tenés que tener instalado:
- Node.js
- MongoDB

## Instalación y configuración
Estos son los pasos para correrlo localmente en tu máquina.
1. Clonate este repositorio en tu PC:

`git clone https://github.com/luciano-peluso/PrimerMERN.git`

2. Andá a la carpeta del proyecto:
`cd PrimerMERN

Ahora hay que instalar las dependencias tanto en el back como en el front.

3. Para el backend:
`cd ../backend`
`npm install`

4. Para el frontend:
`cd ../frontend`
`npm install`

5. Iniciá el servidor y el cliente:
Así como para instalar las dependencias, primero te tenés que meter en la carpeta del backend correr el comando y luego lo mismo, pero para el frontend.
`npm run dev`
Esto corre el servidor en http://localhost:5000 y el cliente en http://localhost:5173.

## Endpoints de la API
La API se basa en el CRUD de productos, siendo bastantes sencillos sus endpoints como:
- GET /api/productos
- POST /api/productos
- PUT /api/productos/{id}
- DELETE /api/productos/{id}
