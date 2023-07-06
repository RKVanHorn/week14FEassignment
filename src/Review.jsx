import React from "react";
import ReviewList from "./ReviewList";
import Stars from "./Stars";

export default function Review(props) {
  const [starRating, setStarRating] = React.useState(null);

  // Variables to hold the current state
  const user = React.useRef(null);
  const review = React.useRef(null);

  // function that happens when the form is submitted
  function saveReview(event) {
    event.preventDefault();
    props.setReviewData((prevData) => [
      ...prevData,
      {
        userName: user.current.value,
        userReview: review.current.value,
        rating: !starRating ? "0⭐" : starRating + "⭐",
      },
    ]);
    // console.log(reviewData);
    user.current.value = "";
    review.current.value = "";
  }

  return (
    <div>
      <form className="review-form" onSubmit={saveReview}>
        <input
          type="text"
          placeholder="Enter your name"
          ref={user}
          name="userName"
          value={props.reviewData.userName}
          required
        />
        <textarea
          placeholder="Enter your review"
          ref={review}
          name="userReview"
          value={props.reviewData.userReview}
          required
        />
        <Stars handleClick={setStarRating} rating={starRating} />
        <button className="form-button">Submit your review</button>
      </form>
      <ReviewList reviews={props.reviewData} />
    </div>
  );
}
