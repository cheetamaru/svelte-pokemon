<script>
    import Card from "../components/Card.svelte"

    let content = ['Pikachu', "Bilbasaur", "Greninja"]
</script>

<div>
    <h1>Svelte Pokemon Pet Project</h1>
    <main>
        <h2>List of contents</h2>
        {#each content as pokemon}
            <Card {pokemon} ></Card>
        {/each}
    </main>
</div>
