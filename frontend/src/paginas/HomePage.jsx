import { Box, Button, Container, Input, useColorModeValue, VStack, Heading, useToast,  Text, SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/producto';
import ProductoCard from '../componentes/ProductoCard'

const HomePage = () => {
  const { traerProductos, productos } = useProductStore();

  useEffect(() => {
    traerProductos();
  }, [traerProductos]);
  console.log(productos);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={30}
          fontWeight={"bold"}
          bgGradient={'linear(to-r, cyan.400, blue.500)'}
          bgClip='text'
          textAlign={"center"}>
            Productos actuales 🚀
        </Text>

        <SimpleGrid 
          columns={{
            base: 1, 
            md: 2, 
            lg:3
          }} 
          spacing={10} 
          w={"full"}>

          {productos.map((producto) => (
            <ProductoCard key={producto._id} producto={producto} />
          ))}

        </SimpleGrid>

        {productos.length === 0 && (
          <Text fontSize="x1" textAlign="center" fontWeight="bold" color="grey.500">
          No se encontraron productos 😢 {""}
          <Link to="/crear">
            <Text as="span" color="blue.500" _hover={{textDecoration: "underline"}}>
              Crear un producto!
            </Text>
          </Link>
        </Text>
        ) }
      </VStack>
    </Container>
  )
}

export default HomePage