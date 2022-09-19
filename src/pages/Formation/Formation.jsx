import React from 'react'
import './Formation.css'

export const Formation = () => {
  const studies = [{
    title: 'Inglés B2-C1',
  },
  {
    title: 'Técnico en Sistemas',
    from: 'Tecnológico de Antioquia',
    date: '2014'
  },
  {
    title: 'Tecnólogo en Sistemas',
    from: 'Tecnológico de Antioquia',
    date: '2016'
  },
  {
    title: 'Ingeniero en Software',
    from: 'Tecnológico de Antioquia',
    date: '2020'
  },
  {
    title: 'Curso de seguridad de la información',
    from: 'Tecnológico de Antioquia'
  }]

  const listStudies = studies.map((study, index) => (<div className='formation__items' key={index}>
    <h3>{study.title}</h3>
    {study.from ? <h3>{study.from}</h3> : null}
    {study.date ? <h3>{study.date}</h3> : null}
  </div>))

  return (
    <section className='formation'>
      <h1>Estudios</h1>
      <div className='formation__list'>
        {listStudies}
      </div>
    </section>
  )
}
