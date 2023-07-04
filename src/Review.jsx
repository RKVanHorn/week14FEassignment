import React from "react";
import ReactStars from "react-rating-stars-component";
import ReviewData from "./ReviewData";
import ReviewList from "./ReviewList";
// import ReviewForm from "./ReviewForm";

export default function Review() {
  const [reviewData, setReviewData] = React.useState(ReviewData);

  // Give the stars a variable to use in state
  let starRating;
  const ratingChanged = (newRating) => {
    // console.log(`${newRating}⭐`);
    starRating = `${newRating}⭐`;
  };

  // Set up a way to give each review a unique id
  let userId = 3;

  // Variables to hold the current state
  const user = React.useRef(null);
  const review = React.useRef(null);

  // function that happens when the form is submitted
  function saveReview(event) {
    event.preventDefault();
    setReviewData((prevData) => [
      ...prevData,
      {
        id: userId,
        userName: user.current.value,
        userReview: review.current.value,
        rating: !starRating ? "0⭐" : starRating,
      },
    ]);
    user.current.value = "";
    review.current.value = "";
    userId++;
  }

  return (
    <div>
      <form className="review-form" onSubmit={saveReview}>
        <input
          type="text"
          placeholder="Enter your name"
          ref={user}
          id="userName"
          value={reviewData.userName}
          required
        />
        <textarea
          placeholder="Enter your review"
          ref={review}
          id="review"
          value={reviewData.userReview}
          required
        />
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          color="#ffffff"
          activeColor="#ffd700"
          isHalf={true}
          name="rating"
        />
        <button className="form-button">Submit your review</button>
      </form>
      <ReviewList reviews={reviewData} />
    </div>
  );
}
