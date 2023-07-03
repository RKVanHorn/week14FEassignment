import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

export default function Movie(props) {
  return (
    <Card bg="dark" text="white" border="light" className="movie-card">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="movie-title">{props.title}</Card.Title>
        <Card.Subtitle className="movie-year">
          Released in {props.year}
        </Card.Subtitle>
        <hr />
        <Card.Text className="movie-details">
          <b>Directed by:</b> {props.director}
          <br />
          <b>Written by:</b> {props.writer}
          <br />
          <b>Starring:</b> {props.actors}
          <br />
          <hr />
          {props.synopsis}
        </Card.Text>
        <div className="links">
          <a href={props.imdb} target="_blank">
            IMDb page
          </a>
          <a href={props.rotten} target="_blank">
            Rotten Tomatoes
          </a>
        </div>
      </Card.Body>
      <h4>Accordion with reviews goes here</h4>
    </Card>
  );
}