export interface DefaultPokemonData {
  name: string;
  url: string;
}
export interface Pokemon {
  name: string;
  url: string;
  image: string;
  types: string[];
  abilities: string[];
}

export interface PokemonType extends DefaultPokemonData {
  count: number;
}

export interface PokemonStore {
  listPokemon: Pokemon[];
  listPokemonType: PokemonType[];
  getListPokemon: () => Promise<void>;
}
