import { useState, useEffect } from "react";
import Pokeball from "./components/Pokeball";
import PokemonCard from "./components/PokemonCard";

export default function PokeballPage() {
  const [pokemon, setPokemon] = useState(null);
  const [message, setMessage] = useState("");
  const [isThrowing, setIsThrowing] = useState(false);
  const [caught, setCaught] = useState([]);

  // Загружаем пойманных из localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("caughtPokemons")) || [];
    setCaught(saved);
  }, []);

  // Сохраняем при каждом изменении массива
  useEffect(() => {
    localStorage.setItem("caughtPokemons", JSON.stringify(caught));
  }, [caught]);

  // --- 1. Начать охоту ---
  const hunt = async () => {
    setMessage("");
    setPokemon(null);

    const id = Math.floor(Math.random() * 151) + 1;

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();

      setPokemon({
        id: data.id,
        name: data.name,
        img: data.sprites.other["official-artwork"].front_default,
      });
    } catch (e) {
      setMessage("Ошибка загрузки покемона :(");
    }
  };

  // --- 2. Кинуть покебол ---
  const throwBall = () => {
    setIsThrowing(true);
    setMessage("");

    setTimeout(() => {
      const success = Math.random() < 0.5;

      if (success) {
        setCaught([...caught, pokemon]);
        setMessage(`${pokemon.name} пойман!`);
      } else {
        setMessage(`${pokemon.name} убежал!`);
      }

      setPokemon(null);
      setIsThrowing(false);
    }, 900);
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Охота на покемонов</h1>

      {/* Большой покеболл */}
      <Pokeball state={isThrowing ? "throw" : "idle"} />

      {/* Кнопка №1 — Охотиться */}
      <button
        onClick={hunt}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          marginBottom: "20px",
          cursor: "pointer",
        }}
      >
        Охотиться за покемонами
      </button>

      {/* Появляется карточка пойманного покемона */}
      {pokemon && <PokemonCard pokemon={pokemon} />}

      {/* Кнопка №2 — Кинуть покебол (только если есть покемон) */}
      {pokemon && (
        <button
          onClick={throwBall}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "18px",
          }}
        >
          Кинуть покебол
        </button>
      )}

      {/* Сообщения */}
      {message && (
        <p style={{ marginTop: "20px", fontSize: "20px" }}>{message}</p>
      )}
    </div>
  );
}