import { useState, useEffect } from "react";
import Pokeball from "./components/Pokeball";
import PokemonCard from "./components/PokemonCard";
import { getPokemon } from "../services/pokemonService";
import "../styles/Pokeball.css";

export default function PokeballPage() {
  const [pokemon, setPokemon] = useState(null);
  const [message, setMessage] = useState("");
  const [isThrowing, setIsThrowing] = useState(false);
  const [caught, setCaught] = useState(() => {
  const saved = localStorage.getItem("caughtPokemons");
  return saved ? JSON.parse(saved) : [];
});
useEffect(() => {
    localStorage.setItem("caughtPokemons", JSON.stringify(caught));
  }, [caught]);
  

  // --- 1. Начать охоту ---
  const hunt = async () => {
    setMessage("");
    setPokemon(null);

    const id = Math.floor(Math.random() * 151) + 1;

     try {
    const data = await getPokemon(id);

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
    <div className = "huntP">
      <h1>Охота на покемонов</h1>

      {/* Большой покеболл */}
      <Pokeball state={isThrowing ? "throw" : "idle"} />

      {/* Кнопка №1 — Охотиться */}
      <button 
        className="starthunt"
        onClick={hunt}
        
      >
        Охотиться за покемонами
      </button>

      {/* Появляется карточка пойманного покемона */}
      {pokemon && <PokemonCard pokemon={pokemon} />}

      {/* Кнопка №2 — Кинуть покебол (только если есть покемон) */}
      {pokemon && (
        <button
        className="shut"
          onClick={throwBall}
        >
          Кинуть покебол
        </button>
      )}

      {/* Сообщения */}
      {message && (
        <p className ="sms">{message}</p>
      )}
    </div>
  );
}