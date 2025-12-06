export default function PokemonCard({ pokemon }) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        background: "white",
        borderRadius: "12px",
        border: "3px solid #d62828",
        display: "inline-block",
      }}
    >
      <h2 style={{ textTransform: "capitalize" }}>{pokemon.name}</h2>
      <img src={pokemon.img} alt={pokemon.name} style={{ width: "200px" }} />
    </div>
  );
}