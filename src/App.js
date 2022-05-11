import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios";


function App() {

  const [pokemon, setPokemon] = useState([]);

  // const fetchPokemon = () => {
  //   console.log("clicked")
  //   fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
  //     .then(response => {
  //       return response.json();
  //     }).then(response => {
  //       console.log(response.results);
  //       setPokemon(response.results);
  //     }).catch(err => {
  //       console.log(err);
  //     });
  // }

  // axios 
  const axiosFetchPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
      .then((response) => {
        console.log(response.data.results);
        setPokemon(response.data.results);
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <h1>Pokemon Api</h1>
      <h4> fetch / Axios / useEffect()</h4>
      <button onClick={axiosFetchPokemon}>Axios Get Pokemon</button>
      {
        pokemon.map((pokemon, index) => {
          return <li key={index}>{pokemon.name}</li>
        })
      }
      {/* <button onClick={fetchPokemon}>Get Pokemon</button>
      {
        pokemon.map((pokemon, index) => {
          return <p key={index}>{pokemon.id}{pokemon.name}</p>
        })
      } */}
    </div>
  );

}

export default App;
