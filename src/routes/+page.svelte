<script>
    import Card from "../components/Card.svelte"

    let content = ['Pikachu', "Bilbasaur", "Greninja"]

    const getDitto = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        const dittoObj = await res.json()

        if (res.ok) {
			return dittoObj;
		}
        
		throw new Error(dittoObj);
    }

    const ditto = getDitto()
</script>

<div>
    <h1>Svelte Pokemon Pet Project</h1>
    <main>
        <h2>List of contents</h2>
        {#each content as pokemon}
            <Card {pokemon} ></Card>
        {/each}
        <div>Name: Ditto</div>
        {#await ditto}
            <div>...loading</div>
        {:then info} 
            <div>Picture:</div>
            <img src="{info.sprites.front_default}" alt="Ditto">
        {:catch error}
            <div>Error: {error}</div>
        {/await}
    </main>
</div>
