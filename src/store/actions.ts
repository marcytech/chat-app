import { TState } from "iares";
import {
	Tactions,
	TglobalStore,
	TgetData,
	TsetStorage,
	TgetPokemons,
	TgetPokemonById,
	Tpokemon,
	TpokemonState,
} from "./types";

export const createActions = (store: TState<TglobalStore>): Tactions => {
	const endpoint = "https://unpkg.com/pokemons@1.1.0/pokemons.json";

	const getData: TgetData = async () => {
		if (!localStorage.length) {
			const response = await fetch(endpoint);
			const { results } = await response.json();
			return { pokemons: results };
		}

		const store = localStorage.getItem("store");
		return store ? JSON.parse(store) : { pokemons: [] };
	};

	const setStorage: TsetStorage = (data) => {
		if (localStorage.length) return;

		const payload = data
			? JSON.stringify(data)
			: JSON.stringify({ pokemons: [] });

		localStorage.setItem("store", payload);
	};

	const getPokemons: TgetPokemons = async (start, end) => {
		const state = await getData();

		const pokemons = state.pokemons.slice(start, end);
		return { pokemons };
	};

	const getPokemonById: TgetPokemonById = async (id) => {
		const { pokemons } = await getData();
		return pokemons.find((pokemon) => pokemon.national_number === id) || null;
	};

	const setState = (payload: TglobalStore) => {
		store.setState({ ...store.state, ...payload });
	};

	return {
		getData,
		setStorage,
		getPokemons,
		getPokemonById,
		setState,
	};
};
