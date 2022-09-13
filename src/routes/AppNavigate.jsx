import {Routes, Route} from "react-router-dom"
import React from 'react'
import { Navbar } from "./Navbar"
import  Footer  from './Footer'

import { Perfil, Estudios, Habilidades, Experiencia, Portafolio, Contacto } from "../pages"

export const AppNavigate = () => {
  return (
    <div className='App'>
        <Navbar/>

        <Routes>

            <Route path="/*" element={<Perfil/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}
