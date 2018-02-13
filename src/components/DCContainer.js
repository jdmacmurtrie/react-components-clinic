import React from 'react';
import Hero from './hero'

const DCContainer = (props) => {

  let superHover = () => {
    alert("DC Disperse!")
  }

  let leaguers = props.leaguers.map(hero => {
    return(
      <Hero
        key={hero.id}
        hero={hero}
        superHover={superHover}
      />
    )
  })

  return(
    <ul>
      {leaguers}
    </ul>
  )
}

export default DCContainer
