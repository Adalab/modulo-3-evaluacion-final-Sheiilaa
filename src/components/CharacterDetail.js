import { Link } from "react-router-dom";

const CharacterDetail=(props)=>{
        
    return(
        <>
        <Link to ="/">
            <p>Volver atrás</p>
        </Link>
        <img className="li_img"
          src={props.character.img}
          alt={props.character.name}
        />
        <h3 className="li_name-details">{props.character.name}</h3>
        <ul className="ul_details"> 
        <li>Especie: {props.character.species}</li>
         <li>Planeta: {props.character.planet}</li>
         <li>Estatus: {props.character.status}</li>
         <li>Episodio en los que aparece: {props.character.episodes}</li>
        </ul>
        </>
    );
    
}
export default CharacterDetail;