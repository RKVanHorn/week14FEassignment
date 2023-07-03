import collage from "../images/collage.jpg";

export default function Hero() {
  return (
    <header className="hero">
      <img src={collage} />
      <h1 className="glow">John Hughes Movie Reviews</h1>
      <img src={collage} />
    </header>
  );
}
