import React, {createContext, useContext, useEffect, useReducer, useState} from "react"

const GlobalContext = createContext();

//Actions
const LOADING = "LOADING";
const GET_POKEMON = "GET_POKEMON";
const GET_ALL_POKEMON = "GET_ALL_POKEMON";
const GET_SEARCH = "GET_SEARCH";
const GET_POKEMON_DATABASE = "GET_POKEMON_DATABASE";
const NEXT = "NEXT";

//Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case LOADING:
            return {...state, loading: true};

        case GET_ALL_POKEMON:
            return {
                ...state, allPokemon: action.payload.results, next: action.payload.next, loading: false };
        
            case GET_POKEMON:
            return { ...state, pokemon: action.payload, loading: false };
        
            case GET_POKEMON_DATABASE:
            return { ...state, pokemonDataBase: action.payload, loading: false };
        
            case GET_SEARCH:
            return { ...state, searchResults: action.payload, loading: false };
        
            case NEXT:
            return {
                ...state,
                allPokemon: [...state.allPokemon, ...action.payload.results],
                next: action.payload.next,
                loading: false,
            };
    }

    return state;
};

export const GlobalProvider = ({children}) => {

    const baseUrl = 'https://pokeapi.co/api/v2/'

    const initialState = {
        allPokemon: [],
        pokemon: {},
        pokemonDataBase: [],
        searchResults:  [],
        next: "",
        loading: false,
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const [allPokemonData, setAllPokemonData] = useState([]);

    const allPokemon = async () => {
        dispatch({ type: "Loading" });

        const response = await fetch(`${baseUrl}pokemon?limit=20`);
        const data = await response.json();
        dispatch({ type: "GET_ALL_POKEMON", payload: data });

        //Fetch Each Character Data
        const allPokemonData = [];

        for(const pokemon of data.results){
            const pokemonResponse = await fetch(pokemon.url);
            const pokemonData = await pokemonResponse.json();
            allPokemonData.push(pokemonData);
        }
        setAllPokemonData(allPokemonData);
    };

    //Get Each Pokemon
    const getPokemon = async (name) => {
        dispatch({tyoe: "LOADING"});

        const response = await fetch(`${baseUrl}pokemon/&{name}`);
        const data = await response.json();

        dispatch({type: "GET_POKEMON", payload: data});
    };

    useEffect(() => {
        allPokemon();
    }, []);

    return (
        <GlobalContext.Provider value={{
            ...state, allPokemonData, getPokemon,
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}