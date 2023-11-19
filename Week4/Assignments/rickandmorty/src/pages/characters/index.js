import { useEffect, useState } from 'react'
import { fetchCharacters } from '../api'
import { Autocomplete, Stack, TextField } from '@mui/material';
import CharacterCard from '@/components/card';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        const getCharacters = async()=>{
            const characters = await fetchCharacters();
            setCharacters(characters);
        };
        getCharacters();
    }, []);

    const handleCharacterSelect = (e,value)=>{
        setSelectedCharacter(value);
    };

    const filteredCharacters = selectedCharacter ? 
    characters.filter((character)=> character.name === selectedCharacter.name)
    : characters;

    return (
    <Stack spacing = {2}>
    <Autocomplete
    id="combo-box"
    options={characters}
    getOptionLabel={(character)=> character.name} 
    onChange={handleCharacterSelect}
    sx={{width:300}}
    size='small'
    renderInput={(params)=>
        <TextField 
        {...params}
        label="Character"/>}
    />
    <Stack 
    spacing={{xs:1,sm:2}}
    direction="row"
    useFlexGap
    flexWrap='wrap'
    >
    {filteredCharacters.map((character)=>(
        <CharacterCard
        key={character.id}
        character={character}
      />
    ))}
    </Stack>
    </Stack>
)}

export default Characters;