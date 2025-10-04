import { create } from "zustand";
import api from "../libs/api";
import type { Pokemon, PokemonStore } from "../types";

const usePokemonStore = create<PokemonStore>((set) => ({
  listPokemon: [],
  listPokemonType: [],
  getListPokemon: async () => {
    const { data } = await api.get(`/generation/1`);
    set(() => ({ listPokemon: data.pokemon_species }));
    data.types.forEach(async (type: Pokemon) => {
      const { data } = await api.get(`/type/${type.name}`);
      set((state) => ({
        listPokemonType: [
          ...state.listPokemonType,
          {
            name: type.name,
            url: type.url,
            count: data.pokemon.length,
          },
        ],
      }));
    });
  },
}));

export default usePokemonStore;
