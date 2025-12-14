export default function PokemonCard({ pokemon }) {
  return (
    <div
    className="PokemonCard"
    >
      <h2 style={{ textTransform: "capitalize" }}>{pokemon.name}</h2>
      <img src={pokemon.img} alt={pokemon.name} style={{ width: "200px" }} />
    </div>
  );
}