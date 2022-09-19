import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../assets/img/logo-cris.ico'
import './Navbar.css'

export const Navbar = () => {
  const navLink = document.querySelectorAll('a');


  const closeMenu = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('.navbar__links');
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
  }

  const openMenu = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('.navbar__links');
    hamburger.classList.toggle('open');
    navMenu.classList.toggle('open');
  }

  navLink.forEach((n) => n.addEventListener('click', closeMenu));

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt='Logo' loading="lazy" />
      </div>
      <div className='navbar__links'>
        <NavLink to='/'>Inicio</NavLink>
        <NavLink to='/profile'>Perfil</NavLink>
        <NavLink to='/skills'>Habilidades</NavLink>
        <NavLink to='/formation'>Estudios</NavLink>
        <NavLink to='/portfolio'>Portafolio</NavLink>
        <NavLink to='/experience'>Experiencia</NavLink>
        <NavLink to='/contact'>Contacto</NavLink>
      </div>
      <div className='navbar__hamburger' id='hamburger' onClick={openMenu}>
        <span className='navbar__bar'></span>
        <span className='navbar__bar'></span>
        <span className='navbar__bar'></span>
      </div>
    </nav >
  )
}
