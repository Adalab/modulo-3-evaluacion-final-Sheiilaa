import { useEffect, useState } from 'react';
import callToApi from './services/api';
import ls from './services/local-storage'
import PropTypes from 'prop-types';
import '../styles/App.scss';
import title from '../images/Rick_and_Morty_-_logo_(English).png'

function App() {
  const [ characters, setCharacters]=useState ([]);

  useEffect(()=>{
    callToApi().then((response)=>{
      setCharacters (response);
    });
  },[]); 

  const renderCharacters=()=>{
    return characters.map((characters, index) =>{
      return (
        <li key={index}>
          <img src={characters.img} alt ={characters.name}/>
          <h2>{characters.name}</h2>
          <h3>{characters.species}</h3>
        </li>
      );
    });
  };
  return (
    <div>
     <header className="header">
      <img src={title} alt="rick and morty" className="header_title" />
      <form>
        <label>Busca tu personaje favorito</label>
        <input type="text" />

      </form>
     </header>
      <main>
        <ul>{renderCharacters()}</ul>
      </main>
    </div>
  );
}

export default App;
