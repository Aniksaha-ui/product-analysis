import React from "react";
import { useNavigate } from "react-router-dom";
import useReview from "../../Hooks/useReview";
import ShowReviews from "../ShowReviews/ShowReviews";

const ShortReviews = () => {
  let navigate = useNavigate();
  const [reviews, setReviews] = useReview();
  const handleReviewRoute = () => {
    navigate("/review");
  };
  return (
    <div className="container mt-5">
      <h1>Customer Review(3)</h1>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
          {reviews.slice(0, 3).map((review) => (
            <ShowReviews review={review} key={review.id} />
          ))}
        </div>
      </div>
      <div className="mt-5 mb-5">
        <button onClick={handleReviewRoute} className="btn btn-danger">
          See All Review
        </button>
      </div>
    </div>
  );
};

export default ShortReviews;
