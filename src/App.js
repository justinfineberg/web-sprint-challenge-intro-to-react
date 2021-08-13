import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components'
import Character from './components/Character'
import axios from 'axios';


const App = () => {
const [characters, getCharacters] = useState([]);


useEffect(()=>{
  axios.get('https://swapi.dev/api/people')
  .then(res=>{
    getCharacters(res.data)
    console.log("App -> res.data", res.data)
  })
  .catch(err=>{
    console.log(err)
  })
},[])


  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      {characters.map((item, i)=>{
        return <Character key={i} results={item} />
      })}
    </div>
  );
}

export default App;
