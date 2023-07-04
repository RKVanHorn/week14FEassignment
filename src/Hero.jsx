import popcorn from "../images/popcorn.png";
import driveIn from "../images/driveIn.png";

export default function Hero() {
  return (
    <header className="hero">
      <img src={popcorn} />
      <h1 className="glow">John Hughes Movie Reviews</h1>
      <img src={driveIn} />
    </header>
  );
}
