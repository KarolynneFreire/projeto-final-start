import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    
<>
<nav className="navbar navbar-expand-lg color-nav">
  <div className="container-fluid">
    <a className="navbar-brand logo" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <Link to='/'  className="nav-link text-light link">Home</Link>
        <Link to='/cliente' className="nav-link text-light link">Cliente</Link>
        <Link to='/sobre' className="nav-link text-light link">Sobre</Link>
        <Link to='/pagamento' className="nav-link text-light link">Pagamento</Link>
      </div>
    </div>
    <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='/login' className="nav-link btn-login text-light">Login/Cadastro </Link>
      </div>
    </div>
  </div>
</nav>
</>

  )
}
