import React from "react";

const ShowReviews = (props) => {
  console.log(props.review);
  const { author, description, img } = props.review;
  return (
    <div class="col">
      <div class="p-3 border bg-light">
        <div class="card h-100 w-100" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Comment</h5>
            <p class="card-text">{description}</p>
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
                class="img-thumbnail border-0 rounded"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowReviews;
