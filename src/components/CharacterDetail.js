import { Link } from "react-router-dom";
 import '../styles/layout/_characterDetails.scss'

const CharacterDetail=(props)=>{
    if(props.character=== undefined){
        return(
            <section>
                <p>PAGINA NO ENCONTRADA</p>
            </section>
        )

    }else{
        
    return(
        <>
        <section className="section_details">
        <Link to ="/">
            <div className="container">
            <p className="back">Volver atrás</p>
            </div>
        </Link>
        
        <img className="details_img"
          src={props.character.img}
          alt={props.character.name}
        />
        <h3 className="li_name-details">{props.character.name}</h3>
        <ul className="ul_details"> 
        <li className="list_details"><span className="title">Especie: </span> {props.character.species}</li>
         <li className="list_details"><span className="title">Planeta: </span> {props.character.planet}</li>
         <li className="list_details"><span className="title">Estatus:</span> {props.character.status}</li>
         <li className="list_details"><span className="title">Episodio en los que aparece:</span> {props.character.episodes}</li>
        </ul>
        </section>
        </>
    );
} 
}
export default CharacterDetail;