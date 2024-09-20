import { Box,useColorModeValue } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"

import CreatePage from "./paginas/CreatePage"
import HomePage from "./paginas/HomePage"
import Navbar from "./componentes/Navbar"

function App() {
  return (
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/crear" element={<CreatePage />}></Route>
        </Routes>
      </Box>
  );
}

export default App
