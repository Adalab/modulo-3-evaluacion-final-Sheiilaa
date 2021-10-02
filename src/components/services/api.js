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
                species: item.especies,
            };


        });
        return result;
    });
};
export default callToApi;