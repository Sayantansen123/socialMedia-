import { Button, Container } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import UserPage from "./pages/UserPage"
import Header from "./components/Header"
import PostPage from "./pages/PostPage"



function App() {

  return (
    <Container maxW="620px">
      <Header/>
      <Routes>
      <Route path="/:username" element={<UserPage/>}/>
      <Route path="/:username/post/:id" element={<PostPage/>}/>
      
      </Routes>
    </Container>
  )
}

export default App
