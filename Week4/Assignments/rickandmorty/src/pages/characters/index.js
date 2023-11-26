import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api';
import { Stack, TextField } from '@mui/material';
import CharacterCard from '@/components/card';
import { useRouter } from 'next/router';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

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

    const handleClick = (id) => {
        router.push(`/characters/${id}`);
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
                        handleClick={handleClick}
                    />
                ))}
            </Stack>
        </Stack>
    );
};

export default Characters;