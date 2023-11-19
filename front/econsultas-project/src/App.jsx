import {Routes, Route} from 'react-router-dom'
import Navbar from "./componets/NavBar/NavBar"
import Cadastro from './pages/Cadastro/Cadastro'
import Cliente from './pages/Cliente'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Footer from "./componets/Footer/Footer"




function App() {
  return (
    <>
    <Navbar/>
   
    <Routes>
      <Route path= '/' element = {<Home/>}></Route>
      <Route path= '/login' element = {<Login/>}></Route>
      <Route path= '/cadastro' element = {<Cadastro/>}></Route>
      <Route path= '/cliente' element = {<Cliente/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
