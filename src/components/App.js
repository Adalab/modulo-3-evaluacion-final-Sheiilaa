import { useEffect, useState } from 'react';
import callToApi from './services/api';
import ls from './services/local-storage'
import PropTypes from 'prop-types';
import '../styles/App.scss';
import title from '../images/Rick_and_Morty_-_logo_(English).png';
import CharacterList from './CharacterList';

function App() {
  const [ characters, setCharacters]=useState ([]);
  const [ searchName, setSearchName]= useState('')

  useEffect(()=>{
    callToApi().then((response)=>{
      setCharacters (response);
    });
  },[]); 

  const handleSeachName=(ev)=>{
    setSearchName(ev.currentTarget.value);
  };
  //Haremos un funcion para el formulario 
  const handleForm=(event)=>{
    event.preventDefault();
  };
 
  const filterCharacter = characters.filter((character)=>
  character.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())); 

  return (
    <div>
     <header className="header">
      <img src={title} alt="rick and morty" className="header_title" />
      <form onSubmit={handleForm}>
        <label>Busca tu personaje favorito</label>
        <input type="text" name="name" value={searchName} onChange={handleSeachName} />

      </form>
     </header>
      <main>
         <CharacterList data={filterCharacter}/> 
        
      </main>
    </div>
  );
}

export default App;
