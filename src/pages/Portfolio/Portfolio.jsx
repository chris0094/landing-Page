import React from 'react'
import todoImg from '../../assets/img/todo-image.png'
import weatherImg from '../../assets/img/weather-image.png'
import heroesImg from '../../assets/img/api-image.png'
import './Portfolio.css'

export const Portfolio = () => {
  const projects = [{
    title: 'API Clima',
    img: weatherImg,
    description: 'Interfaz sencilla para la consulta y detalle sobre el clima de una ciudad mediante una predicción meteorológica',
    preview: 'https://velvety-florentine-4712cc.netlify.app/',
    link: 'https://github.com/chris0094/apiclima'
  }, {
    title: 'Todo List',
    img: todoImg,
    description: 'Aplicación para la gestión y creación de distintas tareas, teniendo como detalle su fecha de realización y la decripción de la actividad a realizar',
    preview: 'https://prismatic-custard-6d35fa.netlify.app/',
    link: 'https://github.com/chris0094/todolist'
  }, {
    title: 'API Heroes',
    img: heroesImg,
    description: 'API para la consulta de distintos héroes del Universo Cinematográfico de Marvel',
    preview: 'https://github.com/chris0094/api-heroes',
    link: 'https://github.com/chris0094/api-heroes'
  }]

  const listProjects = projects.map((project, index) => (<div className='projects__items' key={index}>
    <figure className='projects__image'>
      <img src={project.img} alt={project.title} />
    </figure>
    <div className='projects__description'>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className='projects__actions'>
        <a href={project.preview} target="_blank" rel="noopener noreferrer">Vista previa</a>
        <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </div>))

  return (
    <section className='projects'>
      <h1>Portafolio</h1>
      <div className='projects__list'>
        {listProjects}
      </div>
    </section>
  )
}
