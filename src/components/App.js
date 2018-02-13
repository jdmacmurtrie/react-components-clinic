import React from 'react'
import SuperheroListsContainer from './SuperheroListsContainer'

const App = props => {
  return(
    <div>
      <h1 className="header">Battle of the Heros</h1>
      <SuperheroListsContainer heros={props.heros}/>
    </div>
  )
}

export default App
