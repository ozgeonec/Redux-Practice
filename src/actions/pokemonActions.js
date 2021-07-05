import axios from 'axios';

export const GetPokemonList = (page) => async dispatch => {

    try {
        dispatch({
            type: 'POKEMON_LIST_LOADING'
        });
        const perPage = 15;
        const offset = (page * perPage) - perPage;
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`);

        dispatch({
            type: 'POKEMON_LIST_SUCCESS',
            payload: result.data
        });

    } catch (e) {
        dispatch({
            type: 'POKEMON_LIST_FAIL'
        });
    }

}
