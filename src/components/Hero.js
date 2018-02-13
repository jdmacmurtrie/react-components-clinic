import React from 'react';

const Hero = (props) => {
  let image

  if (props.superClick) {
    image = <img src={props.hero.image} height="400" width="400" onClick={props.superClick}/>
  } else {
    image = <img src={props.hero.image} height="400" width="400" onMouseOver={props.superHover}/>
  }
  return(
    <div>
      {image}
      <h2>{props.hero.name}</h2>
      <p>Powers: {props.hero.powers}</p>
      <p>(True Identity: {props.hero.trueIdentity})</p>
    </div>
  )
}

export default Hero
