import React from "react";
import useReview from "../../Hooks/useReview";
import ShowReviews from "../ShowReviews/ShowReviews";

const ShortReviews = () => {
  const [reviews, setReviews] = useReview();
  return (
    <div className="container mt-5">
      <h1>Review(3)</h1>
      <div class="container mt-5">
        <div class="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          {reviews.slice(0, 3).map((review) => (
            <ShowReviews review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShortReviews;
