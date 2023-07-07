import React from "react";
import ReviewList from "./ReviewList";
import Stars from "./Stars";

export default function Review(props) {
  const [starRating, setStarRating] = React.useState(null);
  const [userValue, setUserValue] = React.useState("");
  const [reviewValue, setReviewValue] = React.useState("");

  // function that happens when the form is submitted
  function saveReview(event) {
    event.preventDefault();
    props.setReviewData((prevData) => [
      ...prevData,
      {
        userName: userValue,
        userReview: reviewValue,
        rating: !starRating ? "0⭐" : starRating + "⭐",
      },
    ]);
    // console.log(reviewData);
    setUserValue("");
    setReviewValue("");
    setStarRating(null);
  }

  return (
    <div>
      <form className="review-form" onSubmit={saveReview}>
        <input
          type="text"
          placeholder="Enter your name"
          name="userName"
          value={userValue}
          onChange={(event) => setUserValue(event.target.value)}
          required
        />
        <textarea
          placeholder="Enter your review"
          name="userReview"
          value={reviewValue}
          onChange={(event) => setReviewValue(event.target.value)}
          required
        />
        <Stars handleClick={setStarRating} rating={starRating} />
        <button className="form-button">Submit your review</button>
      </form>
      <ReviewList reviews={props.reviewData} />
    </div>
  );
}
