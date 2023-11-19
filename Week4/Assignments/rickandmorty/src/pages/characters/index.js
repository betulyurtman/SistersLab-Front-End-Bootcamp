import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api';
import { Stack, TextField } from '@mui/material';
import CharacterCard from '@/components/card';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getCharacters = async () => {
            const charactersData = await fetchCharacters();
            setCharacters(charactersData);
        };
        getCharacters();
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredCharacters = searchTerm
        ? characters.filter(character => 
              character.name.toLowerCase().includes(searchTerm)
          )
        : characters;

    return (
        <Stack spacing={2}>
            <TextField
                id="search-box"
                label="Search Characters"
                variant="outlined"
                sx={{ width: 250 }}
                onChange={handleSearchChange}
            />
            <Stack 
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap='wrap'
            >
                {filteredCharacters.map((character) => (
                    <CharacterCard
                        key={character.id}
                        character={character}
                    />
                ))}
            </Stack>
        </Stack>
    );
};

export default Characters;