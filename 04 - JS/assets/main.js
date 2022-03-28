const d = document,
    $form = d.getElementById('form-pokemon'),
    $query = d.getElementById('pokemon'),
    $main = d.querySelector('main'),
    $links = d.querySelector('.links'),
    $template = d.getElementById('pokemon-template').content,
    $fragment = d.createDocumentFragment(),
    $infoPokemon = d.querySelector('.info-pokemon'),
    $section = d.querySelector('.container'),
    colors = {
        fire: '#FFA05D',
        grass: '#8FD594',
        electric: '#FFE43B',
        water: '#7E97C0',
        ground: '#CAAC4D',
        rock: '#90642D',
        poison: '#9D5B9B',
        bug: '#EAFD71',
        dragon: '#97b3e6',
        psychic: '#FF96B5',
        flying: '#CDCDCD',
        fighting: '#FF5D5D',
        normal: '#FFFFFF'
    };

let pokeApi = "https://pokeapi.co/api/v2/pokemon/";

async function getpokemon(query){
    let pokeInner ='';
    try{
        let res = await fetch(`${pokeApi}${query}`),
            pokemon = await res.json(),
            stats = pokemon.stats,
            moves = pokemon.moves.slice(5,10),
            color = colors[pokemon.types[0].type.name];
            
        $infoPokemon.style.backgroundColor = color;
        pokeInner = `
            <div class="card">
                <figure>
                    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                </figure>
                <div class="info">
                    <span class="number">#${pokemon.id.toString().padStart(3,'0')}</span>
                    <h3 class="name">${pokemon.name}</h3>
                    <small class="type">Tipo: <span>${pokemon.types[0].type.name}</span></small>
                </div>
            </div>
            <div class="poke-info">
                <div class="estadisticas">
                    <h3>Estadisticas</h3>
        `;
        stats.forEach(el => pokeInner +=`<p>${el.stat.name}: ${el.base_stat}</p>`);
        pokeInner += `
                </div>
                <div class="movimientos">
                    <h3>Movimientos</h3>
        `;
        moves.forEach(el => pokeInner +=`<p>${el.move.name}</p>`);
        pokeInner += `
                </div>
            </div>
        `;

        $infoPokemon.innerHTML = pokeInner;
        $section.classList.add('active');
    }catch(err){
        let message = err.statusText || 'Ocurrio un error';
        pokeInner = `
            <figure>
                <figcaption>Error ${err.status}: ${message}</figcaption
            </figure>
        `;
        console.log(err);
        $infoPokemon.innerHTML = pokeInner;
    }
}

async function getPokemons(url) {
    try{
        let res = await fetch(url),
            json = await res.json(),
            $prevLink,
            $nextLink;

        if(!res.ok) throw {status: res.status, statusText: res.statusText}

        for(let i = 0; i < json.results.length; i++){
            try {
                let res = await fetch(json.results[i].url),
                pokemon = await res.json(),
                color = colors[pokemon.types[0].type.name];
                $template.querySelector('img').src = pokemon.sprites.front_default;
                $template.querySelector('.number').textContent = `#${pokemon.id.toString().padStart(3,'0')}`;
                $template.querySelector('.name').textContent = pokemon.name;
                $template.querySelector('.type span').textContent = pokemon.types[0].type.name;
                $template.querySelector('.pokemon-card').style.backgroundColor = color;
                $template.querySelector('.pokemon-card').dataset.name = pokemon.name;
                $template.querySelector('img').dataset.name = pokemon.name;
                $template.querySelector('.number').dataset.name = pokemon.name;
                $template.querySelector('.name').dataset.name = pokemon.name;
                $template.querySelector('.type span').dataset.name = pokemon.name;
                $template.querySelector('.type').dataset.name = pokemon.name;
                $template.querySelector('figure').dataset.name = pokemon.name;
                                        
            }catch (err) {
                let message = err.statusText || 'Ocurrio un error';
                $template += `  
                    <figure>
                        <figcaption>Error ${err.status}: ${message}</figcaption>    
                    </figure>
                `;
            }
            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        }//end for
        $main.appendChild($fragment);
        $prevLink = json.previous ? `<a href="${json.previous}">Anterior ⏮️</a>` : "";
        $nextLink = json.next ? `<a href="${json.next}">⏭️ Siguiente</a>` : "";
        $links.innerHTML = $prevLink + " " + $nextLink
    }catch(err){
        let message = err.statusText || 'Ocurrio un error';
        $main.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
    }
}

d.addEventListener('DOMContentLoaded', e => getPokemons(pokeApi));


d.addEventListener('click', e => {
    if(e.target.matches('.links a')){
        e.preventDefault();
        $main.innerHTML = '';
        getPokemons(e.target.getAttribute('href'));
    }
});

$form.addEventListener('submit', e => {
    e.preventDefault()
    getpokemon($query.value);
    console.log($query.value);
});

$main.addEventListener('click', e => {
    e.preventDefault()
    if(e.target.matches('.pokemon-card *')){
        console.log('hola');
        console.log(e.target.getAttribute('data-name'));
        getpokemon(e.target.getAttribute('data-name'));

    }
});

d.addEventListener('click', e => {
    if (e.target.matches('.panel-btn *')) {
        $section.classList.remove('active');
    }
}); 