import React from "react";

const ShowReviews = (props) => {
  console.log(props.review);
  const { author, description, img } = props.review;
  return (
    <div class="col">
      <div class="p-3 border bg-light">
        <div class="card h-100 w-100" style={{ width: "18rem" }}>
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <p class="card-text">
              <b>Comment : </b> {description}
            </p>
            <p>
              <b>Author Name : </b>
              {author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowReviews;
