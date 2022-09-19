import { Routes, Route } from "react-router-dom"
import React from 'react'
import './AppNavigate.css'

import { Profile, Formation, Skills, Experience, Portfolio, Contact, Home } from "../pages"

export const AppNavigate = () => {
  return (
    <main className="router">
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/profile' element={<Profile />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/formation' element={<Formation />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </main>
  )
}
