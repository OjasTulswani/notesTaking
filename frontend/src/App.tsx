

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "./pages/landing/Landing"
import Notes from './pages/note/Notes'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        < Route path="/" element={<Landing /> } />
        < Route path="/notes" element={<Notes /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
