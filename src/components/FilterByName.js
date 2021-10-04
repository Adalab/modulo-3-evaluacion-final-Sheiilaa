import '../styles/layout/_filter.scss';
const FilterByName= (props)=>{
    return (
        <>
        <section className="section_filter_name">
        <label htmlFor="name" className="filter_label">Buscar por el nombre : </label>
        <input type="text" name="name"
        className="filter_input" value={props.searchName} onChange={props.handleSeachName} />
        </section>
        </>
    )
}
export default FilterByName;