export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonType {
  name: string;
  url: string;
  count: number;
}

export interface PokemonStore {
  listPokemon: Pokemon[];
  listPokemonType: PokemonType[];
  getListPokemon: () => Promise<void>;
}
