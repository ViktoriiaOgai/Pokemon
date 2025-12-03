import ball from "../assets/ball.svg";
import "../styles/Pokeball.css";

export default function Pokeball({ state }) {
  return <img src={ball} className={`ball ${state}`} />;
}