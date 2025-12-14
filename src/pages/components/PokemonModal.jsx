//import "../../../styles/Pokeball.css";

export default function PokemonModal({ details, onClose, onRelease }) {
  if (!details) return null; // если данных нет — не показываем модалку

  return (
    <div
    className="closeonclick"
      onClick={onClose} // клик по фону — закрыть
    >
      <div
        className="clicknotclose"
        onClick={(e) => e.stopPropagation()} // клик внутри не закрывает
      >
        {/* Крестик */}
        <button
          className="cross"
          onClick={onClose}
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
          className="release"
          onClick={onRelease}
        >
          Освободить
        </button>
      </div>
    </div>
  );
}