import { useEffect, useMemo, useRef, useState } from "react";
import api from "../libs/api";
import type { Pokemon } from "../types";

export default function HomePage() {
  const [listPokemon, setListPokemon] = useState<Pokemon[]>([]);
  const limit = 12;
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchTemporary, setSearchTemporary] = useState("");

  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    api.get(`/generation/1`).then((res) => {
      setListPokemon(res.data.pokemon_species);
    });
  }, []);

  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      setSearch(searchTemporary);
      setPage(1);
    }, 500);
  }, [searchTemporary]);

  const filteredPokemon = useMemo(
    () =>
      listPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      ),
    [listPokemon, search]
  );

  const displayedPokemon = useMemo(
    () => filteredPokemon.slice((page - 1) * limit, (page - 1) * limit + limit),
    [filteredPokemon, page]
  );

  return (
    <div className="grid grid-cols-2">
      <div>Chart</div>
      <div className="p-4">
        <h1 className="text-2xl font-bold">List Pokemon From Generation 1</h1>
        <label htmlFor="search" className="mt-4 input rounded-lg glass w-full">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            id="search"
            type="text"
            placeholder="Search Pokemon..."
            value={searchTemporary}
            onChange={(e) => setSearchTemporary(e.target.value)}
          />
        </label>
        <ul className="list flex flex-col gap-2 mt-4 w-full">
          {displayedPokemon.map((pokemon) => (
            <li
              className="group list-row capitalize glass cursor-pointer transition-transform hover:scale-105 hover:!blur-none"
              key={pokemon.name}
            >
              <span>{pokemon.name}</span>
              <span className="hidden group-hover:block float-end text-right">
                View Detail
              </span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({
            length: Math.ceil(filteredPokemon.length / limit),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`btn btn-sm glass ${
                page === index + 1 ? "bg-accent" : ""
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
