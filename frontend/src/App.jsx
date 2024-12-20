import { Button, Container } from "@chakra-ui/react"
import { Navigate, Route, Routes } from "react-router-dom"
import UserPage from "./pages/UserPage"
import Header from "./components/Header"
import PostPage from "./pages/PostPage"
import HomePage from "./pages/HomePage"
import AuthPage from "./pages/AuthPage"
import { useRecoilValue } from "recoil"
import userAtom from "./atoms/userAtom"



function App() {
  const user = useRecoilValue(userAtom)


  return (
    <Container maxW="620px">
      <Header/>
      <Routes>
      
      <Route path="/" element={user ? <HomePage/>: <Navigate to={"/auth"}/>}/>
      <Route path="/auth" element={!user ? <AuthPage/> : <Navigate to={"/"}/>}/>
      <Route path="/:username" element={<UserPage/>}/>
      <Route path="/:username/post/:id" element={<PostPage/>}/>
      
      </Routes>
    </Container>
  )
}

export default App
