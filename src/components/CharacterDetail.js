
const CharacterDetail=(props)=>{
    return(
        <>
        <link to ="/">
            <p>Volver atrás</p>
        </link>
        <img className="li_img"
          src={props.character.img}
          alt={props.character.name}
        />
        <h3 className="li_name-details">{props.character.name}</h3>
        <ul className="ul_details"> 
        <li>Species: {props.character.species}</li>
         <li>Origin: {props.character.planet}</li>
         <li>Status: {props.character.status}</li>
         <li>Episodes: {props.character.episodes}</li>
        </ul>
        
        <p className="li_specie"> {props.character.species}</p>
        </>
    )
}
export default CharacterDetail;