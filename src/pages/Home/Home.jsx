import React from 'react'
import './Home.css'
import image from '../../assets/img/start-image.png'

export const Home = () => {
  return (
    <section className="home">
      <div className='home__presentation'>
        <h1>¡Hola!</h1>
        <h2>Mi nombre es Cristhian,</h2>
        <h3>los invito a conocer mi trabajo.</h3>
      </div>
      <div className='home__image'>
        <img src={image} alt='Presentation' loading="lazy" />
      </div>
    </section>
  )
}
