import { Routes, Route } from 'react-router-dom'
import Navbar from "./componets/NavBar/NavBar"
import Cadastro from './pages/Cadastro/Cadastro'
import Cliente from './pages/Cliente'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import HomePaciente from './pages/HomePaciente/HomePaciente'
import HomeProfissional from './pages/HomeProfissional/HomeProfissional'
import Footer from "./componets/Footer/Footer"
import Satisfacao from './pages/Satisfacao/Satisfacao';
import Sobre from './pages/Sobre'
import HomeEscolhaProfissional from './pages/HomeEscolhaProfissional/CardHomeEscolhaProfissional'

function App() {
  return (
    <>
    <Navbar/>
   
    <Routes>
      <Route path= '/' element = {<Home/>}></Route>
      <Route path= '/login' element = {<Login/>}></Route>
      <Route path= '/cadastro' element = {<Cadastro/>}></Route>
      <Route path= '/cliente' element = {<Cliente/>}></Route>
      <Route path= '/sobre' element = {<Sobre/>}></Route>
      <Route path= '/satisfacao' element = {<Satisfacao/>}></Route>
      <Route path="/home-paciente" element={<HomePaciente />}></Route>
      <Route path="/home-profissional" element={<HomeProfissional />}></Route>
      <Route path="/escolha-profissional" element={<HomeEscolhaProfissional />}></Route>
      
    </Routes>
    <Footer/>
    </>
  )
}

export default App
