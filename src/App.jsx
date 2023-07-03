import "./App.css";
import data from "./MovieList";
import Hero from "./Hero";
import Movie from "./Movie";

export default function App() {
  return (
    <div>
      <Hero />
      <main>
        {data.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </main>
    </div>
  );
}
