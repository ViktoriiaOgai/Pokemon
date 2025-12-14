import { useState, useEffect } from "react";
import PokemonModal from "./components/PokemonModal";
import { getPokemon } from "../services/pokemonService";

export default function HomePage() {
  const [caught, setCaught] = useState([]);
  const [selected, setSelected] = useState(null);
  const [details, setDetails] = useState(null);

  // Загружаем пойманных
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("caughtPokemons")) || [];
    setCaught(saved);
  }, []);

  // Загружаем детали выбранного
  useEffect(() => {
    if (!selected) return;

    async function loadDetails() {
      const data = await getPokemon(selected.id)
      setDetails(data);
    }

    loadDetails();
  }, [selected]);

  // Освободить
  function releasePokemon(id) {
    const updated = caught.filter((p) => p.id !== id);
    setCaught(updated);
    localStorage.setItem("caughtPokemons", JSON.stringify(updated));

    setSelected(null);
    setDetails(null);
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Пойманные покемоны</h1>

      {caught.length === 0 && <p>Пока нет пойманных покемонов</p>}

      {/* Список карточек */}
      <div
      className="list1"
      >
        {caught.map((pokemon) => (
          <div
            key={pokemon.id}
            onClick={() => setSelected(pokemon)}
            className="list2"
          >
            <img
              src={pokemon.img}
              style={{ width: "100px", height: "100px" }}
              alt={pokemon.name}
            />
            <h3>{pokemon.name}</h3>
          </div>
        ))}
      </div>

      {/* Модалка */}
      <PokemonModal
        details={details}
        onClose={() => {
          setSelected(null);
          setDetails(null);
        }}
        onRelease={() => releasePokemon(selected.id)}
      />
    </div>
  );
}