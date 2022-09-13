import React from 'react'
import { Link } from "react-router-dom"
import logo from './../assets/img/logo-cris.ico'
// import './Navbar.css'

export const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__logo'>
            <img src={logo} />
        </div>
        <div className='navbar__links'>
            <Link to='/'>Inicio</Link>
            <Link to='/profile'>Perfil</Link>
            <Link to='/skills'>Habilidades</Link>
            <Link to='/studies'>Estudios</Link>
            <Link to='/portfolio'>Portafolio</Link>
            <Link to='/experience'>Experiencia</Link>
            <Link to='/contact'>Contacto</Link>
        </div>
    </nav >
  )
}
