import CharacterCard from './CharacterCard'


 const CharacterList=(props)=>{
     const eachCharacter=  props.data.map((character) =>(  
          <li key={character.id} className="li">
                <CharacterCard character ={character} />
               </li>
        ));
        return  <ul className="ul">{eachCharacter}</ul>
        
 
};

 export default CharacterList ;