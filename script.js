const container = document.getElementById("container")
        function aleatorio() {
            return Math.floor(Math.random() * 649)
        }
        const numAleatorio = aleatorio()


        async function fetchData() {   
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numAleatorio}`);
        const pokeList = await response.json();
        console.log(pokeList);
        const divBody = document.querySelector("body")
        divBody.className=pokeList.types[0].type.name

        container.innerHTML = ""
        const divCreado = document.createElement("div")
        divCreado.className = "divCreado" 
        divCreado.innerHTML = `
        <h1>${pokeList.name}</h1>
        <div class="divImagen">
            <img src="${pokeList.sprites.other.dream_world.front_default}" alt="">
        </div>
        <div class="datosPokemon">
            <h2>Type</h2>
            <p>${pokeList.types[0].type.name}</p>
        </div>
        <div class="datosPokemon">
            <h2>XP</h2>
            <p>${pokeList.base_experience}</p> 
        </div>
        <div class="datosPokemon">
            <h2>Weight</h2>
            <p>${pokeList.weight} kg.</p> 
        </div>
        `
        container.appendChild(divCreado);
        
        
    } catch (error) {
        console.log(error);
    }
}
fetchData()