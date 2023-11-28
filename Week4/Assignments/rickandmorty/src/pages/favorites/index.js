import { useEffect, useState } from "react";
import { fetchCharacter, fetchCharacters } from "../api";
import { Stack, Typography } from "@mui/material";
import CharacterCard from "@/components/card";

const Favorites = () => {
    const [characters, setCharacters] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const getCharacters = async () => {
        const characters = await fetchCharacters();
        setCharacters(characters);
    };

    const favoriteCharacters = characters.filter((character) => 
        favorites.includes(character.id)
    );

    const handleFavoriteToggle = (id) => {
        const newFavorites = favorites.includes(id) 
            ? favorites.filter((favoriteID) => favoriteID !== id)
            : [...favorites, id];
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    const isFavorite = (id) => favorites.includes(id);

    useEffect(() => {
        getCharacters();
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites){
            setFavorites(JSON.parse(storedFavorites));
        }
    },[]);

  return (
    <Stack spacing={2}>
        <Typography variant="h2">Favorite Characters</Typography>
        <Stack 
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap='wrap'>
            {favoriteCharacters.map((character) => (
                <CharacterCard 
                key={character.id} 
                character={character}
                handleFavoriteToggle={handleFavoriteToggle}
                isFavorite={isFavorite}/>
            ))}
        </Stack>
    </Stack>
  )
}

export default Favorites 