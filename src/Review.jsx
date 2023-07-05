import React from "react";
import ReactStars from "react-rating-stars-component";
// import ReviewData from "./ReviewData";
import ReviewList from "./ReviewList";

export default function Review() {
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

  // Give the stars a variable to use in state
  let starRating;
  const ratingChanged = (newRating) => {
    // console.log(`${newRating}⭐`);
    starRating = `${newRating}⭐`;
  };

  // Variables to hold the current state
  const user = React.useRef(null);
  const review = React.useRef(null);

  // function that happens when the form is submitted
  function saveReview(event) {
    event.preventDefault();
    console.log(reviewData);
    setReviewData((prevData) => [
      ...prevData,
      {
        userName: user.current.value,
        userReview: review.current.value,
        rating: !starRating ? "0⭐" : starRating,
      },
    ]);
    console.log(reviewData);
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
          // name="userName"
          // id="userName"
          value={reviewData.userName}
          required
        />
        <textarea
          placeholder="Enter your review"
          ref={review}
          // name="userReview"
          // id="review"
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
        />
        <button className="form-button">Submit your review</button>
      </form>
      <ReviewList reviews={reviewData} />
    </div>
  );
}
