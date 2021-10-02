import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import callToApi from './services/api';
import '../styles/App.scss';
import title from '../images/Rick_and_Morty_-_logo_(English).png';
import CharacterList from './CharacterList';
import Filter from './Filter';
import PageNotFound from './PageNotFound';
import CharacterDetail from './CharacterDetail';

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

    const routeData =useRouteMatch ('/character/:id');
    const characterId= (routeData !== null) ? routeData.params.id : '';

    const selectedCharacter = characters.find((character) => character.id === parseInt(characterId));

  return (
    <div>
      <Switch>
      <Route path='/character/:id'>
        <section>
          < CharacterDetail  character={selectedCharacter}/>
        </section>


      </Route>

      <Route exact patch='/' >
     <header className="header">
      <img src={title} alt="rick and morty" className="header_title" />
      <form onSubmit={handleForm}>
        <Filter searchName={searchName}  handleSeachName={handleSeachName}/>
      
      </form>
     </header>
      <main>
         <CharacterList data={filterCharacter}/> 
        
      </main>
      </Route>
      <Route>
        <PageNotFound />
      </Route>

      </Switch>
    </div>
  );
}

export default App;
