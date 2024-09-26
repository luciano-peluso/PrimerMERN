import { Box, Button, Container, Input, useColorModeValue, VStack, Heading, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useProductStore } from '../store/producto';

const CreatePage = () => {
  const [producto, setNuevoProducto] = useState({
    nombre: "",
    precio: "",
    imagen: ""
  });

  const { crearProducto } = useProductStore(); 

  const toast = useToast();

  const handleAddProducto = async() => { 
    const {success, message} = await crearProducto(producto);
    if(!success){
      toast({
        "title":"Error!",
        "description": message,
        "status": "error",
        "isClosable": true,
      });
    } else {
      toast({
        "title":"Éxito!",
        "description": message,
        "status": "success",
        "isClosable": true,
      });
    }
    setNuevoProducto({nombre:"", precio:"", imagen:""});
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack
        spacing={8}
      >
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
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