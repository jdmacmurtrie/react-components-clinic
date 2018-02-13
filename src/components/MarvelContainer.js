import React from 'react';
import Hero from './hero'

const MarvelContainer = (props) => {

  let superClick = () => {
    alert("Avengers, Assemble!")
  }

  let avengers = props.avengers.map(hero => {
    return(
      <Hero
        key={hero.id}
        hero={hero}
        superClick={superClick}
      />
    )
  })

  return(
    <ul>
      {avengers}
    </ul>
  )
}

export default MarvelContainer
