import React from "react";

const Comment = () => {
  return (
    <React.Fragment>
      <div className="container-md">
        <div>
          <h3 className="user-name-header">Username</h3>
        </div>
        <div>
          <p className="comment-text">Comment text goes here</p>
        </div>
        <button
          id="btn-edit"
          className="btn btn-primary btn-small"
          type="button"
        >
          Edit Chirp
        </button>
      </div>
    </React.Fragment>
  );
};

export default Comment;
