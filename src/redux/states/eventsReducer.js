import { types } from '../types/types';

const initialState = {
  pokedex: [],
  loading: true,
  selectedPokemon: null,
  query: '',
  search: [],
};

export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadingPokemons:
      return {
        ...state,
        pokedex: [...action.payload],
        loading: false,
      };

    case types.selectPokemon:
      return {
        ...state,
        selectedPokemon: action.payload,
      };

    case types.addNewPokemon:
      return {
        ...state,
        pokedex: [...state.pokedex, action.payload],
      };

    case types.updatePokemon:
      return {
        ...state,
        pokedex: state.pokedex.map((pokemon) => {
          return pokemon.id === action.payload.id
            ? action.payload
            : pokemon;
        }),
      };

    case types.deletePokemon:
      return {
        ...state,
        pokedex: state.pokedex.filter((pokemon) => {
          return pokemon.id !== state.selectedPokemon.id;
        }),
        selectPokemon: null,
      };

    case types.clearSelectedPokemon:
      return {
        ...state,
        selectedPokemon: null,
      };

    case types.searchPokemon:
      return {
        ...state,
        query: action.payload,
        search: state.pokedex.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(action.payload)
        ),
      };

    default:
      return state;
  }
};
