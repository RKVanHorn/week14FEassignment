import collage from "../images/collage.jpg";

export default function Hero() {
  return (
    <header className="hero">
      <h1>John Hughes Movie Reviews</h1>
      <img src={collage} />
    </header>
  );
}
