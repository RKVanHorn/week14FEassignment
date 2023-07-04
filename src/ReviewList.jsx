export default function ReviewList(props) {
  return (
    <div className="review-list">
      {props.reviews.map((review) => (
        <p className="review-items" key={review.id}>
          {review.userName} says "{review.userReview}" {review.rating}
        </p>
      ))}
    </div>
  );
}
