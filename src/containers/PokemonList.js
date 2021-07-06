import React from "react";
import {useDispatch, useSelector} from "react-redux";
import _ from 'lodash';
import {GetPokemonList} from "../actions/pokemonActions";


const PokemonList = () => {
    const dispatch = useDispatch();
    const pokeList = useSelector(state => state.PokemonList);

    React.useEffect(()=>{
    FetchData(1)
    },[]);

    const FetchData = (page=1) =>  {
        dispatch(GetPokemonList(page))
    }

    const ShowData = () => {
        if (_.isEmpty(pokeList.data)) {
            return <p>have data</p>
        }
        if (pokeList.loading) {
            return <p>Loading...</p>
        }
        if (pokeList.errorMsg !== '') {
            return <p>{pokeList.errorMsg}</p>
        }
        return <p>no data</p>
    }

    return (
        <div>
            {ShowData()}
        </div>
    )
};

export default PokemonList;
