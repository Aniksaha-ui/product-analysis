import React from "react";

const ShowReviews = (props) => {
  // console.log(props.review);
  const { rating, author, description, img } = props.review;
  return (
    <div className="col">
      <div className="p-3 border bg-light">
        <div className="card h-100 w-100" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Comment</h5>
            <p className="card-text">{description}</p>

            <div className="d-flex align-item-center justify-content-between">
              <p className="mt-4">
                <small>
                  <b>Author : </b>
                </small>
                {author}
              </p>
              <img
                src={img}
                width="80px"
                className="img-thumbnail border-0 rounded"
                alt="..."
              />
            </div>
            <p className="card-text">
              <b>Rating :</b> {rating} / 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowReviews;
