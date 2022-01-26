import React from 'react';

const PokemonList = ({ pokeList }) => {

    const pokemon = pokeList.map((pokemon, i) => <li key={i}>{pokemon.name}</li>)

    return (
        <div>
            Pokemon List
            {pokemon}
        </div>
    );
}

export default PokemonList;
