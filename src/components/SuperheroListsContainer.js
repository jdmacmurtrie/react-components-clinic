import React from 'react';
import MarvelContainer from './MarvelContainer'
import DCContainer from './DCContainer'

const SuperheroListsContainer = (props) => {
  return(
    <div className="row">
      <div className="columns small-6">
        <MarvelContainer avengers={props.heros.avengers}/>
      </div>
      <div className="columns small-6">
        <DCContainer leaguers={props.heros.justiceLeague}/>
      </div>
    </div>
  )
}

export default SuperheroListsContainer
