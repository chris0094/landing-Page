import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        <a className="nav-link" href="#">Perfil</a>
        <a className="nav-link" href="#">Habilidades</a>
        <a className="nav-link" href="#">Estudios</a>
        <a className="nav-link" href="#">Experiencia</a>
        <a className="nav-link" href="#">Portafolio</a>
        <a className="nav-link" href="#">Contacto</a>
      </div>
      </div>
</nav >
  )
}
