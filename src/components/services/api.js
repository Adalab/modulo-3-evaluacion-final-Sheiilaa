const result= 20;
const callToApi=(searchName)=>{
    return fetch ('https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json')
    .then(response=>response.json())
    .then (data=>{
        const result =data.results.map((item)=>{
            return{
                id:item.id,
                name: item.name,
                img : item.image,
                species: item.species,
                status: item.status,
                planet: item.origin.name,
                episodes: item.episode.length,
            };


        });
        return result;
    });
};
export default callToApi;