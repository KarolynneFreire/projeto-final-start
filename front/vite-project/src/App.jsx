import {Routes, Route} from 'react-router-dom'
import Navbar from "./componets/NavBar/NavBar"
import Cadastro from './pages/Cadastro/Cadastro'
import Contato from './pages/Contato'
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
      <Route path= '/contato' element = {<Contato/>}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
