import { Button, Container } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import UserPage from "./pages/UserPage"



function App() {

  return (
    <Container maxW="620px">
      <Routes>
      <Route path="/:username" element={<UserPage/>}/>
      </Routes>
    </Container>
  )
}

export default App