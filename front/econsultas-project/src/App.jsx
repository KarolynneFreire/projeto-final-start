import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
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
import CardsProfissionais from './pages/CardsProfissionais/Card'
import AgendamentoConsulta from './pages/AgendamentoConsulta/AgendamentoConsulta'
import CompartilharArquivo from './pages/CompartilharArquivo/CompartilharArquivo'
import CriarServicoProfissional from './pages/CriarServicoProfissional/CriarServicoProfissional'
import MeusServicos from './pages/MeusServicos/MeusServicos'
import Rendimentos from './pages/Rendimentos/Rendimentos'

function App() {
  return (
    <UserProvider>
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
      <Route path="/escolha-profissional" element={<CardsProfissionais />}></Route>
      <Route path="/agendamento-consulta" element={<AgendamentoConsulta />}></Route>
      <Route path="/compartilhar-arquivo" element={<CompartilharArquivo />}></Route>
      <Route path="/criar-servico-profissional" element={<CriarServicoProfissional />}></Route>
      <Route path="/meus-servicos" element={<MeusServicos />}></Route>
      <Route path="/meus-rendimentos" element={<Rendimentos />}></Route>
      
    </Routes>
    <Footer/>
    </>
    </UserProvider>
  )
}

export default App
