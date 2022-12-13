<script>
	import '../app.css';
	import PokemanCard from '../components/PokemanCard.svelte';

	export let data;
	const { pokemons } = data;

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		filteredPokemon = [...pokemons];
		if (searchTerm) {
			filteredPokemon = pokemons.filter((string) =>
				string.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		}
	}
</script>

<h1 class="text-4xl text-center my-8 uppercase">SvelteKit Pokedex</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	bind:value={searchTerm}
	placeholder="Search Pokemon"
	name=""
	id=""
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokeman}
		<PokemanCard {pokeman} />
	{/each}
</div>
