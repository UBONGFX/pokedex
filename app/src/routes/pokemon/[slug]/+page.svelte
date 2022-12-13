<script>
	export let data;
	const { pokemon } = data;
	const type = pokemon.types[0].type.name;
</script>

<div class="justify-center w-full items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
	<p class="text-center">
		Type: <strong>{type}</strong> | Height: <strong>{pokemon.height}</strong> | Weight:
		<strong>{pokemon.weight}</strong>
	</p>
	<img
		class="w-40 h-40 text-center items-center"
		src={pokemon.sprites['front_default']}
		alt={pokemon.name}
	/>
</div>
