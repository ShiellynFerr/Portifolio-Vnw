import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ContentCard from './assets/components/ContentCard'
import Menu from './assets/components/Header'
import Home from './assets/Home'
import Ods from './assets/Ods'
import Proyectos from './assets/Proyectos'
import Sobre from './assets/Sobre'

function App() {
  return (
    <>
     <BrowserRouter>
     <Menu/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='sobre' element={<Sobre/>}/>
      <Route path='proyectos' element={<Proyectos/>}/>
      <Route path='ods' element={<Ods/>} /> 
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
