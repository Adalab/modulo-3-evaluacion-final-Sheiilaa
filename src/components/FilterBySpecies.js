const FilterBySpecies =(props)=>{
    return(
        <>
        <label htmlFor="species" className="Filter_species">Por especie</label>
        <select name="species" id="species" value={props.searchSpices} onChange={props.handleSearchSpecies}>
            <option value="all">Todos</option>
            <option value="Human">Humano</option>
            <option value="Alien">Alien</option>
            <option value="Robot">Robot</option>
            <option value="Humanoid">Humanoide</option>

        </select>
        </>
    )

}
export default FilterBySpecies;