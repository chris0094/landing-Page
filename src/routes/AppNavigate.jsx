import {Routes, Route} from "react-router-dom"
import React from 'react'

import { Perfil, Estudios, Habilidades, Experiencia, Portafolio, Contacto, Inicio } from "../pages"

export const AppNavigate = () => {
  return (
    <Routes>  
            <Route exact path='/' element={<Inicio/>}> </Route>
            <Route path='/profile' element={<Perfil/>}></Route>
            <Route path='/skills' element={<Habilidades/>}></Route>
            <Route path='/studies' element={<Estudios/>}></Route>
            <Route path='/experience' element={<Experiencia/>}></Route>
            <Route path='/portfolio' element={<Portafolio/>}></Route>
            <Route path='/contact' element={<Contacto/>}></Route>
          </Routes>
  )
}
