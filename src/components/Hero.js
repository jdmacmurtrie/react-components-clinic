import React from 'react';

const Hero = (props) => {
  let image
  if () {
    image = <img src={} height="400" width="400" onClick={}/>
  } else {
    image = <img src={} height="400" width="400" onMouseOver={}/>
  }
  return(
    <div>
      {image}
      <h2>{}</h2>
      <p>Powers: {}</p>
      <p>(True Identity: {})</p>
    </div>
  )
}

export default Hero
