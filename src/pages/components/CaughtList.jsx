export default function CaughtList({ pokemons }) {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Пойманные покемоны:</h2>

      {pokemons.length === 0 && <p>Пока никого...</p>}

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {pokemons.map((p) => (
          <div
            key={p.id}
            style={{
              border: "2px solid #444",
              padding: "10px",
              borderRadius: "8px",
              width: "120px",
              textAlign: "center"
            }}
          >
            <img src={p.img} alt={p.name} style={{ width: "80px" }} />
            <p style={{ textTransform: "capitalize" }}>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}