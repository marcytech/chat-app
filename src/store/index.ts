export {
	TpokemonTypes,
	TpokemonState,
	TglobalStore,
	TpokemonSprites,
	Tpokemon,
	Tactions,
} from "./types";

import { createState, TState } from "iares";
import { createActions } from "./actions";
import { TglobalStore } from "./types";

const data: TglobalStore = {
	pokemons: [],
	search: "",
};

const store = createState<TglobalStore>(data);
const actions = createActions(store);

export { store, actions };
