import { useGlobalContext } from '@/context/global'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'

function Pokemon() {

    const router = useRouter(); 

    const {pokemon} = router.query;

    const {getPokemon, loading, pokemon: pokemonItem} = useGlobalContext();

    console.log(pokemonItem);

    useEffect(() => {
        if (pokemon) {
            getPokemon(pokemon);
        }
    }, []);

    let myLink = "";

    if (pokemonItem?.sprites?.other) {
      const { "official-artwork": link } = pokemonItem?.sprites?.other;
      myLink = link.front_default;
    }
  
  return (
  <div>
        {pokemonItem && (
        <div>
            <img src={pokemonItem?.sprites?.other?.home.front_default 
            ? pokemonItem?.sprites?.other?.home.front_default
            : myLink 
        } 
        alt='' />
        </div>
        )}
    </div>
  );
}

export default Pokemon;