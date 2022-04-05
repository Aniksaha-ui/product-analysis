import React from "react";
import useReview from "../../Hooks/useReview";
import ShowReviews from "../ShowReviews/ShowReviews";

const Review = () => {
  const [reviews, setReviews] = useReview();

  return (
    <div className="container mt-5">
      <h1>What Our Customer Says</h1>
      <h3 className="mt-4">Reviews ({reviews.length})</h3>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          {reviews.map((review) => (
            <ShowReviews review={review} key={review.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
