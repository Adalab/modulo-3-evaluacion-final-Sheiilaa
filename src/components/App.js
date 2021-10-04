import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import callToApi from './services/api';
import '../styles/App.scss';

import CharacterList from './CharacterList';
import FilterByName from './FilterByName';
import PageNotFound from './PageNotFound';
import CharacterDetail from './CharacterDetail';
import Header from './Header';
import Footer from './Footer';
import FilterBySpecies from './FilterBySpecies';
function App() {
  const [ characters, setCharacters]=useState ([]);
  const [ searchName, setSearchName]= useState('')
  const [ searchSpices, setSearchSpecies]= useState ('all');

  useEffect(()=>{
    callToApi().then((response)=>{
      setCharacters (response);
    });
  },[]); 

  const handleSeachName=(ev)=>{
    setSearchName(ev.currentTarget.value);
  };
  const handleSearchSpecies= (ev)=>{
    setSearchSpecies(ev.currentTarget.value);
  };
  //Haremos un funcion para el formulario 
  const handleForm=(event)=>{
    event.preventDefault();
  };
 
  const filterCharacter = characters.filter((character)=>
  character.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
  )
  .filter( (chacacters) => searchSpices === 'all' || searchSpices ===characters.species);

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
        <Header />
        <main>
          <section className="main_section">
            <p >
              Bienvenidos a la web de Rick and Morty, en esta web podréis filtrar vuestros personajes además de conocer toda su información.
            </p>
            </section>
        <form onSubmit={handleForm}>
        <FilterByName searchName={searchName}  handleSeachName={handleSeachName}/>
        <FilterBySpecies searchSpices={searchSpices} handleSearchSpecies={handleSearchSpecies} />
      
      </form>
        <CharacterList data={filterCharacter} searchName={searchName}/>  
      </main>
      < Footer />
      </Route>

      
      <Route>
        <PageNotFound />
      </Route>

      </Switch>
    </div>
  );
}

export default App;
