export default function PokemonModal({ details, onClose, onRelease }) {
  if (!details) return null; // если данных нет — не показываем модалку

  return (
    <div
      onClick={onClose} // клик по фону — закрыть
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()} // клик внутри не закрывает
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          width: "300px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Крестик */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "8px",
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "20px",
            cursor: "pointer",
            opacity: 0.7,
          }}
        >
          ✕
        </button>

        {/* Контент */}
        <h2>{details.name}</h2>

        <img src={details.sprites.front_default} style={{ width: "150px" }} />

        <p><b>Вес:</b> {details.weight}</p>
        <p><b>Рост:</b> {details.height}</p>

        <p>
          <b>Типы:</b> {details.types.map((t) => t.type.name).join(", ")}
        </p>

        <button
          onClick={onRelease}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "red",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Освободить
        </button>
      </div>
    </div>
  );
}