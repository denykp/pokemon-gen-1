/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router";
import usePokemonStore from "./stores/pokemonStore";
import { useEffect } from "react";
import PieChart from "./components/PieChart";

function App() {
  const { getListPokemon, listPokemonType } = usePokemonStore();

  useEffect(() => {
    getListPokemon();
  }, []);
  return (
    <>
      <div className="app grid grid-cols-2">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">
            Pokemon Types From Generation 1
          </h1>
          {listPokemonType.length === 0 ? (
            <div>Loading...</div>
          ) : (
            <PieChart
              labels={listPokemonType.map((type) =>
                type.name.replace(/^./, (m) => m.toUpperCase())
              )}
              series={listPokemonType.map((type) => type.count)}
              type="donut"
            />
          )}
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
