import { types } from '../types/types';
import {
  fetchingDataFromApi,
  getAllDataFromApi,
} from '../../utilities/fetchData';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const ID_AUTHOR = import.meta.env.VITE_APP_ID_AUTHOR;

export const startAddNewPokemon = (event) => {
  return async (dispatch) => {
    try {
      const res = await fetchingDataFromApi(
        '',
        {
          ...event,
          idAuthor: ID_AUTHOR,
        },
        'POST'
      );

      const body = await res.json();

      if (!body)
        throw new Error(
          'Error en la subida de archivos a la Base de datos'
        );

      dispatch(addNewPokemon(body));
    } catch (err) {
      console.error(err);
    }
  };
};

const addNewPokemon = (event) => {
  return {
    type: types.addNewPokemon,
    payload: event,
  };
};

export const startUpdatePokemon = (event) => {
  return async (dispatch) => {
    try {
      const res = await fetchingDataFromApi(
        event.id,
        { ...event, idAuthor: ID_AUTHOR },
        'PUT'
      );

      const body = await res.json();

      dispatch(updatePokemon(body));
    } catch (err) {
      console.error(err);
    }
  };
};

const updatePokemon = (event) => {
  return {
    type: types.updatePokemon,
    payload: event,
  };
};

export const startDeletePokemon = () => {
  return async (dispatch, getState) => {
    const { id } = getState().events.selectedPokemon;
    try {
      const res = await fetchingDataFromApi(id, undefined, 'DELETE');
      const body = await res.json();

      if (body.success) {
        dispatch(deletePokemon());
      }
    } catch (err) {
      console.error(err);
    }
  };
};

const deletePokemon = () => {
  return {
    type: types.deletePokemon,
  };
};

export const startLoadingPokemons = () => {
  return async (dispatch) => {
    try {
      const pokemonsData = await getAllDataFromApi(
        BASE_URL,
        ID_AUTHOR
      );
      dispatch(loadingPokemons(pokemonsData));
    } catch (err) {
      console.error(err);
    }
  };
};

const loadingPokemons = (event) => {
  return {
    type: types.loadingPokemons,
    payload: event,
  };
};

export const selectPokemon = (event) => {
  return {
    type: types.selectPokemon,
    payload: event,
  };
};

export const clearSelectedPokemon = () => {
  return {
    type: types.clearSelectedPokemon,
  };
};

export const startSearchingPokemon = (event) => {
  return async (dispatch) => {
    dispatch(searchPokemon(event));
  };
};

export const searchPokemon = (event) => {
  return {
    type: types.searchPokemon,
    payload: event,
  };
};
