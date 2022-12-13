export const load = async ({ params }) => {
    console.log('params');
    console.log(params.slug);
    const post = await fetch('http://pokeapi.co/api/v2/pokemon/' + params.slug);
    const data = await post.json();

    console.log(data)

    return {
        pokemon: data
    };
}