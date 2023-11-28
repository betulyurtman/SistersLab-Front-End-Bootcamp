import { useEffect, useState } from 'react';
import { fetchCharacterWithSearch, fetchCharacters } from '../api';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import CharacterCard from '@/components/card';
import { useRouter } from 'next/router';

const Characters = () => {
    const router = useRouter();
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [searchText, setSearchText] = useState('');
    const [searchBy, setSearchBy] = useState('name');
    const [favorites, setFavorites] = useState([]);
    
    useEffect(() => {
        const getCharacters = async () => {
            setLoading(true);
            const charactersData = await fetchCharacters();
            setCharacters(charactersData);
            setLoading(false);
        };
        getCharacters();

        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    const fetchCharacterData = async () => {
        let characterList = [];
        if (searchText) {
            characterList = await fetchCharacterWithSearch(searchText, searchBy);
        } else {
            return;
        }
        setCharacters(characterList);
    };

    const handleClick = (id) => {
        router.push(`/characters/${id}`);
    };

    const filteredCharacters = characters.filter((character) => {
    return (
        character.name.toLowerCase().includes(searchText.toLowerCase()) ||
        character.status.toLowerCase().includes(searchText.toLowerCase()) ||
        character.gender.toLowerCase().includes(searchText.toLowerCase())
    );
    });

    const handleFavoriteToggle = (id) => {
        const newFavorites = favorites.includes(id) 
            ? favorites.filter((favoriteID) => favoriteID !== id)
            : [...favorites, id];
        setFavorites(newFavorites);
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
    };

    const isFavorite = (id) => favorites.includes(id);

    return (
        <Stack spacing={2}>
            <Stack direction="row" spacing={2}>
                <FormControl sx={{width: '160px'}}>
                    <InputLabel id="demo-simple-select-label">Search By</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={searchBy}
                    label='Age'
                    onChange={(e) => setSearchBy(e.target.value)}
                    >
                        <MenuItem value="name">Name</MenuItem>
                        <MenuItem value="status">Status</MenuItem>
                        <MenuItem value="species">Species</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="search-box"
                    label="Search Characters"
                    variant="outlined"
                    sx={{ width: 250 }}
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <Button 
                variant='contained'
                onClick={fetchCharacterData}
                >Search</Button>
            </Stack>
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
                        loading={loading}
                        handleFavoriteToggle={handleFavoriteToggle}
                        isFavorite={isFavorite}
                    />
                ))}
            </Stack>
        </Stack>
    );
};

export default Characters;