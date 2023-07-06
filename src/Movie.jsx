import React from "react";
import Card from "react-bootstrap/Card";
import ModalSection from "./ModalSection";

export default function Movie(props) {
  const [reviewData, setReviewData] = React.useState([
    {
      userName: "Rachel",
      userReview: "My favorite John Hughes movie!",
      rating: "5⭐",
    },
    {
      userName: "Jeremy",
      userReview: "Not my favorite John Hughes movie.",
      rating: "1⭐",
    },
  ]);

  return (
    <Card bg="dark" text="white" className="movie-card">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title className="movie-title">{props.title}</Card.Title>
        <Card.Subtitle className="movie-year">{props.year}</Card.Subtitle>
        <hr />
        <Card.Text className="movie-details">
          <b>Director:</b> {props.director}
          <br />
          <b>Writer:</b> {props.writer}
          <br />
          <b>Starring:</b> {props.actors}
          <br />
          <hr />
          {props.synopsis}
        </Card.Text>
        <div className="links">
          <a href={props.imdb} target="_blank">
            IMDb
          </a>
          <a href={props.rotten} target="_blank">
            Rotten Tomatoes
          </a>
        </div>
      </Card.Body>
      <Card.Footer>
        <ModalSection
          title={props.title}
          reviewData={reviewData}
          setReviewData={setReviewData}
        />
      </Card.Footer>
    </Card>
  );
}
