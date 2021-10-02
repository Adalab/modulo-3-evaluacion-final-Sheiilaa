const Filter= (props)=>{
    return (
        <>
<label htmlFor="name">Busca tu personaje favorito</label>
        <input type="text" name="name" value={props.searchName} onChange={props.handleSeachName} />
        </>
    )
}
export default Filter;