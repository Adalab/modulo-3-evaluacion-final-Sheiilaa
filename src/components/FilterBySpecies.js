import '../styles/layout/_filter.scss';
const FilterBySpecies =(props)=>{
    return(
        <>
         <section className="section_filter_species">
        <label htmlFor="species" className="filter_label">Buscar por especie :</label>
        <select name="species" id="species" className="filter_select" value={props.searchSpices} onChange={props.handleSearchSpecies}>
            <option value="all">Todos</option>
            <option value="Human">Humano</option>
            <option value="Alien">Alien</option>
            <option value="Robot">Robot</option>
            <option value="Humanoid">Humanoide</option>

        </select>
        </section>
        
        </>
    )

}
export default FilterBySpecies;