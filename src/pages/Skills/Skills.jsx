import React from 'react'
import htmlImg from '../../assets/skills/html5.svg'
import cssImg from '../../assets/skills/css3.svg'
import javaImg from '../../assets/skills/java.svg'
import javascriptImg from '../../assets/skills/javascript.svg'
import reactImg from '../../assets/skills/react.svg'
import csharpImg from '../../assets/skills/c-sharp.svg'
import './Skills.css'

export const Skills = () => {
  const images = [{
    title: 'HTML',
    src: htmlImg,
  },
  {
    title: 'CSS',
    src: cssImg,
  },
  {
    title: 'Java',
    src: javaImg,
  },
  {
    title: 'JavaScript',
    src: javascriptImg,
  },
  {
    title: 'ReactJS',
    src: reactImg,
  },
  {
    title: 'C Sharp',
    src: csharpImg,
  }]

  const listImages = images.map(image => <figure key={image.title.toLocaleLowerCase()}>
    <img src={image.src} alt={image.title} loading="lazy" />
    <figcaption>{image.title}</figcaption>
  </figure>)

  return (
    <section className='skills'>
      <h1>Habilidades</h1>
      <div className='skills__items'>
        {listImages}
      </div>
    </section>
  )
}
