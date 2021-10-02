const CharacterCard = (props) => {
    return (
      <>
        <img className="li_img"
          src={props.character.img}
          alt={props.character.name}
        />
        <h3 className="li_name">{props.character.name}</h3>
        <p className="li_specie"> {props.character.species}</p>
      </>
    );
  };
  
  export default CharacterCard;