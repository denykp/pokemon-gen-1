import usePokemonStore from "../stores/pokemonStore";
import { useNavigate, useParams } from "react-router";

export default function DetailPage() {
  const { listPokemon } = usePokemonStore();
  const params = useParams();
  const navigate = useNavigate();

  const detailPokemon = listPokemon.find(
    (pokemon) => pokemon.name === String(params.name || "")
  );

  if (!detailPokemon) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-80">
        <button
          className="btn btn-outline btn-circle hover:btn-accent flex items-center justify-center absolute top-0 left-0 rounded-full pb-1.5 text-2xl"
          onClick={() => navigate(-1)}
        >
          {"<"}
        </button>
        <h1 className="text-2xl font-bold capitalize">{detailPokemon.name}</h1>
      </div>
      <div className="glass rounded-lg p-4 mt-4">
        <img
          src={detailPokemon.image}
          alt={detailPokemon.name}
          className="w-80"
        />
        <div className="list flex flex-col gap-2">
          <div className="font-bold">Type:</div>
          {detailPokemon.types.map((type, index) => (
            <div key={index} className="capitalize list-row glass">
              {type}
            </div>
          ))}
        </div>
        <div className="list flex flex-col gap-2 mt-4">
          <div className="font-bold">Abilities:</div>
          {detailPokemon.abilities.map((type, index) => (
            <div key={index} className="capitalize list-row glass">
              {type}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
