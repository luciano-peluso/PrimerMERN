import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, HStack, IconButton, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useColorModeValue, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useProductStore } from '../store/producto'

const ProductoCard = ({producto}) => {
    const [productoActualizado, setProductoActualizado] = useState(producto)
    const textColor = useColorModeValue("gray.600", "gray.200")
    const bg = useColorModeValue("white", "gray.800")

    const { borrarProducto, actualizarProducto } = useProductStore();
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleBorrarProducto = async (idProd) => {
        const {success, message} = await borrarProducto(idProd);
        if(!success){
            toast({
                title: 'Error',
                description: message,
                status: 'error',
                duration: 3000,
                isClosable: true
            })
        } else {
            toast ({
                title: 'Exito',
                description: message,
                status: 'success',
                duration: 3000,
                isClosable: true
            })
        }
    }   

    const handleActualizar = async (idProd, productoActualizado) => {
        const { success, message } = await actualizarProducto(idProd, productoActualizado);
        onClose();
        if(!success){
            toast({
                title: 'Error',
                description: message,
                status: 'error',
                duration: 3000,
                isClosable: true
            })
        } else {
            toast ({
                title: 'Exito',
                description: message,
                status: 'success',
                duration: 3000,
                isClosable: true
            })
        }
    }

  return (
    <Box 
        shadow="lg" 
        rounded="lg" 
        overflow="hidden" 
        transition="all 0.3s" 
        _hover={{ transform:"translateY(-5px)", shadow:"xl"}} 
        bg={bg}>
            <Image src={producto.imagen} alt={producto.nombre} h={48} w={'full'} objectFit={'cover'} />

            <Box p={4}>
                <Heading as='h3' size='md' mb={2}>  
                    {producto.nombre}
                </Heading>

                <Text fontWeight={'bold'} fontSize={'x1'} color={textColor} mb={4}> 
                    ${producto.precio}
                </Text>

                <HStack spacing={2}>
                    <IconButton icon={<EditIcon />} onClick={onOpen} colorScheme='blue'/>
                    <IconButton icon={<DeleteIcon />} onClick={() => handleBorrarProducto(producto._id)} colorScheme='red'/>
                </HStack>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>Editar producto</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
                            <Input placeholder='Nombre del producto' name='nombre'
                                value={productoActualizado.nombre}
                                onChange={(e) => setProductoActualizado({ ...productoActualizado, nombre: e.target.value})}
                                />
                            <Input placeholder='Precio' name='precio'
                                value={productoActualizado.precio}
                                onChange={(e) => setProductoActualizado({ ...productoActualizado, precio: e.target.value})}
                                />    
                            <Input placeholder='URL de la Imagen' name='imagen'
                                value={productoActualizado.imagen}
                                onChange={(e) => setProductoActualizado({ ...productoActualizado, imagen: e.target.value})}
                                />
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => handleActualizar(producto._id, productoActualizado)}>Editar</Button>
                        <Button variant={'ghost'} onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </ModalOverlay>
            </Modal>
    </Box>
  )
}

export default ProductoCard
