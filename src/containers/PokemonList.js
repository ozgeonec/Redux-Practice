import React from "react";
import {useDispatch, useSelector} from "react-redux";
import _ from 'lodash';


const PokemonList = () => {
    const dispatch = useDispatch();
    const pokeList = useSelector(state => state.Po);

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
    }

    return (
        <div>
            Pokemon List
        </div>
    )
};

export default PokemonList;
