import React from "react";
import ReactStars from "react-rating-stars-component";
import ReviewList from "./ReviewList";

export default function Review(props) {
  console.log(props.reviewData);

  // Give the stars a variable to use in state
  let starRating;
  const ratingChanged = (newRating) => {
    // console.log(`${newRating}⭐`);
    starRating = `${newRating}⭐`;
  };

  // Variables to hold the current state
  const user = React.useRef(null);
  const review = React.useRef(null);

  // function handleChange(event) {
  //   setReviewData((prevData) => [
  //     ...prevData,
  //     {
  //       userName: event.target.value,
  //       userReview: event.target.value,
  //       rating: !starRating ? "0⭐" : starRating,
  //     },
  //   ]);
  // }

  // function that happens when the form is submitted
  function saveReview(event) {
    event.preventDefault();
    // console.log(reviewData);
    props.setReviewData((prevData) => [
      ...prevData,
      {
        userName: user.current.value,
        userReview: review.current.value,
        rating: !starRating ? "0⭐" : starRating,
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
          // name="userName"
          // id="userName"
          value={props.reviewData.userName}
          required
          // onChange={handleChange}
        />
        <textarea
          placeholder="Enter your review"
          ref={review}
          // name="userReview"
          // id="review"
          value={props.reviewData.userReview}
          required
          // onChange={handleChange}
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
      <ReviewList reviews={props.reviewData} />
    </div>
  );
}
