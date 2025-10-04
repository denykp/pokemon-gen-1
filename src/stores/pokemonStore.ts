import { create } from "zustand";
import api from "../libs/api";
import type {
  DefaultPokemonData,
  Pokemon,
  PokemonStore,
  PokemonType,
} from "../types";

const usePokemonStore = create<PokemonStore>((set) => ({
  listPokemon: [],
  listPokemonType: [],
  getListPokemon: async () => {
    const { data } = await api.get(`/generation/1`);
    const newListPokemon: Pokemon[] = await Promise.all(
      data.pokemon_species.map(async (pokemon: DefaultPokemonData) => {
        const { data } = await api.get(`/pokemon/${pokemon.name}`);
        return {
          name: pokemon.name,
          url: pokemon.url,
          image:
            data?.sprites?.other?.["official-artwork"]?.front_default ||
            data?.sprites?.other?.dream_world?.front_default ||
            data?.sprites?.front_default ||
            null,
          types: data.types.map(
            (type: { slot: number; type: { name: string } }) => type.type.name
          ),
          abilities: data.abilities.map(
            (ability: { ability: { name: string } }) => ability.ability.name
          ),
        };
      })
    );
    const newListPokemonType: PokemonType[] = await Promise.all(
      data.types.map(async (type: DefaultPokemonData) => {
        const { data } = await api.get(`/type/${type.name}`);
        return {
          name: type.name,
          url: type.url,
          count: data.pokemon.length,
        };
      })
    );
    set(() => ({
      listPokemon: newListPokemon,
      listPokemonType: newListPokemonType,
    }));
  },
}));

export default usePokemonStore;
