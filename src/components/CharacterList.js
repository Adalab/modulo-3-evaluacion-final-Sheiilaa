import CharacterCard from './CharacterCard'
import '../styles/layout/_characterlist.scss'


 const CharacterList=(props)=>{
     const eachCharacter=  props.data.map((character) =>(  
          <li key={character.id} className="character_li">
                <CharacterCard character ={character} />
               </li>
        ));
        return (
            <section className="character_list">
                {props.data.lenght !==0 ? (
                    <ul className="character_ul">{eachCharacter}</ul>
                ) : (
                    <p className="character_list_error"> Lo siento, no existe este personaje</p>
                )}
            
            </section>

        ) 
        
 
};

 export default CharacterList ;