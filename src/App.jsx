import React, { useState,useEffect } from 'react'

import Tables from './components/Tables'
import axios from 'axios'

const App = () => {

  const [allPokemons, setAllPokemons] = useState([])
  const getAllPokemons = async () => {
    const response = await axios.get(`http://localhost:8080/pokemons`)
    const dataPayload = await response.data.data.pokemons
    setAllPokemons(
      dataPayload
    )
  }
  useEffect(() =>{console.log(allPokemons)}, [allPokemons])
  useEffect(() =>{ getAllPokemons().catch(error => console.log(error) )}, [])
  return (
    <React.Fragment>

      <Tables getAllPokemons={getAllPokemons} allPokemons={allPokemons}/>

    </React.Fragment>
  )
}
export default App

