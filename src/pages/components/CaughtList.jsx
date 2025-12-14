export default function CaughtList({ pokemons }) {
  return (
    <div className ="CaughtList"style={{ marginTop: "40px" }}>
      <h2>Пойманные покемоны:</h2>

      {pokemons.length === 0 && <p>Пока никого...</p>}

      <div
        className="CaughtList1"
      >
        {pokemons.map((p) => (
          <div
            key={p.id}
            className="CaughtList2"
          >
            <img src={p.img} alt={p.name} style={{ width: "80px" }} />
            <p style={{ textTransform: "capitalize" }}>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}