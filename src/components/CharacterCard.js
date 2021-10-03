import { Link } from "react-router-dom";

const CharacterCard = (props) => {
    return (
      <Link to = {`./character/${props.character.id}`} >
      <>
        <img className="li_img"
          src={props.character.img}
          alt={props.character.name}
        />
        <h3 className="li_name">{props.character.name}</h3>
        <p className="li_specie"> {props.character.species}</p>
      </>

      </Link>
    );
  };
  
  export default CharacterCard;