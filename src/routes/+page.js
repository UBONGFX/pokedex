export const load = async ({ fetch }) => {
    const post = await fetch('http://pokeapi.co/api/v2/pokemon?limit=150');
    const data = await post.json();

    const loadedPokemon = data.results.map((data, index) => {
        index = index + 1;
        return {
            name: data.name,
            id: index,
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + index + '.png'
        }
    })

    return {
        pokemons: loadedPokemon
    };
}