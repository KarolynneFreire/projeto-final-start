import { Link } from 'react-router-dom'
import '../NavBar/assets/css/styles.css'
import logo from '../../assets/img/logo.png'


export default function Navbar() {
  return (
    
<>
<nav className="navbar navbar-expand-lg color-nav">
  <div className="container-fluid">
  <a className="navbar-brand logo" href="#"><img src={logo} alt="logo" style={{ width: '40px'}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <Link to='/'  className="nav-link text-light link">Home</Link>
        <Link to='/sobre' className="nav-link text-light link">Sobre</Link>
        <Link to='/satisfacao' className="nav-link text-light link">Formulario Satisfacao</Link>
      </div>
    </div>
    <div className="collapse navbar-collapse d-lg-flex justify-content-around" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='/cadastro' className="nav-link btn-login text-light">Cadastro </Link>
        <Link to='/login' className="nav-link btn-login text-light">Login </Link>
      </div>
    </div>
  </div>
</nav>
</>

  )
}
