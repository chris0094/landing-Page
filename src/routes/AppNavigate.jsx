import { Routes, Route } from "react-router-dom"
import React from 'react'
import { Navbar } from "./Navbar"
import  Footer  from './Footer'

import { Perfil, Estudios, Habilidades, Experiencia, Portafolio, Contacto, Inicio } from "../pages"

export const AppNavigate = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
      <Route path='/skills' element={<Skills />}></Route>
      <Route path='/studies' element={<Formation />}></Route>
      <Route path='/experience' element={<Experience />}></Route>
      <Route path='/portfolio' element={<Portfolio />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  )
}
