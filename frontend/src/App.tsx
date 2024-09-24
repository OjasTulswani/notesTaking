

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "./pages/landing/Landing"
import Notes from './pages/note/Notes'
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        < Route path="/" element={<Landing /> } />
        < Route path="/notes" element={<Notes /> } />
        < Route path="/register" element={<Register /> } />
        < Route path="/login" element={<Login /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
