import { Box, Button, Container, Input, useColorModeValue, VStack, Heading } from '@chakra-ui/react';
import React, { useState } from 'react'

const CreatePage = () => {
  const [producto, setNuevoProducto] = useState({
    nombre: "",
    precio: "",
    imagen: ""
  });

  const handleAddProducto = () => {
      console.log("Agregar producto");
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack
        spacing={8}
      >
      <Heading as={"h1"} size={"2x1"} textAlign={"center"} mb={8}>
        Crear nuevo producto
      </Heading>

      <Box
        w={"full"} bg={useColorModeValue("white","gray.800")} 
        p={6} rounded={"lg"} shadow={"md"}>
          <VStack spacing={4}>
            <Input placeholder='Nombre del producto' name='nombre' value={producto.nombre}
              onChange={(e) => setNuevoProducto({...producto, nombre: e.target.value})}
            />
            
            <Input placeholder='Precio' name='precio' value={producto.precio}
              onChange={(e) => setNuevoProducto({...producto, precio: e.target.value})}
            />
            
            <Input placeholder='Imagen' name='imagen' value={producto.imagen}
              onChange={(e) => setNuevoProducto({...producto, imagen: e.target.value})}
            />

            <Button colorScheme='blue' onClick={handleAddProducto} w='full'>
              Agregar producto
            </Button>
          </VStack>
      </Box>
      </VStack>
    </Container>
  )
}

export default CreatePage