import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    
<>
<nav className="navbar navbar-expand-lg color-nav">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav mx-auto">
        <Link to='/'  className="nav-link">Home</Link>
        <Link to='/contato' className="nav-link">Contato</Link>
      </div>
    </div>
    <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to='/login' className="nav-link">Login </Link>
      </div>
    </div>
  </div>
</nav>
</>


  )
}
