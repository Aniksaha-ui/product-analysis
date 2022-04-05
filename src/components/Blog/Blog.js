import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body bg-primary text-white">
              <h5 className="card-title">What is Context Api?</h5>
              <p className="card-text">
                Context Api is a state management system.Using Context api we
                can easily share data.We have not to pass data to another
                component manually(using props).The main purpose of Context Api
                to avoid props drilling.Before introduce Context Api the only
                option was to install a 3rd party library of state management
                like Redux.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="card">
            <div className="card-body bg-primary text-white">
              <h5 className="card-title">What is semantic Tags?</h5>
              <p className="card-text">
                A sementic tag describe the meaning of the element.In Html 4,
                there was no sementic tags.We defined it like (div
                className="header"/>).But in Html 5,there is a tag named
                header.So it is very effective for a programmer and also for the
                browser.We can easily understand the meaning of different parts
                of a web pages. Some sementic tags are -
                article,aside,main,header,footer etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
