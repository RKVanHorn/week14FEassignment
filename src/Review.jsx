import ReactStars from "react-rating-stars-component";
import React from "react";

export default function Review() {
  const [reviewData, setReviewData] = React.useState([
    {
      id: 1,
      userName: "Rachel",
      userReview: "My favorite John Hughes movie!",
      rating: "5⭐",
    },
    {
      id: 2,
      userName: "Jeremy",
      userReview: "Not my favorite John Hughes movie.",
      rating: "1⭐",
    },
  ]);

  let starRating;

  const ratingChanged = (newRating) => {
    // console.log(`${newRating}⭐`);
    starRating = `${newRating}⭐`;
  };

  const user = React.useRef(null);
  const review = React.useRef(null);
  let userId = 3;

  function handleSubmit(event) {
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
      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          ref={user}
          id="userName"
          required
        />
        <input
          type="text"
          placeholder="Enter your review"
          ref={review}
          id="review"
          required
        />
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          name="rating"
        />
        <button className="form-button">Submit your review</button>
      </form>
      <div className="review-list">
        {reviewData.map((review) => (
          <p className="review-items" key={review.id}>
            {review.userName} says "{review.userReview}" - {review.rating}
          </p>
        ))}
      </div>
    </div>
  );
}

// function handleChange(event) {
//   const { name, value } = event.target;
//   setReviewData((prevData) => {
//     return {
//       ...prevData,
//       [name]: name === "rating" ? `${newRating} ⭐` : value,
//     };
//   });
//   console.log(`On change ${reviewData}`);
// }
// function handleSubmit(event) {
//   event.preventDefault();
//   console.log(`On submit ${reviewData}`);
// }
