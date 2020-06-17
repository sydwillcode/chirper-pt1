import React from "react";

const NewChirp = (props) => {
  return (
    <React.Fragment>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="usernameNewChirp"
              placeholder="Your Username Here"
              onChange={props.handleNewUsername}
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
            Chirp Away!
          </label>
          <div className="col-sm-10">
            <textarea
              type="text"
              className="form-control"
              id="userNewMessage"
              onChange={props.handleNewMessage}
            />
          </div>
          <div className="form-group row " >
                <button className="btn btn-dark" onClick={props.handleSubmit}>New Chirp</button>
            </div>
        </div>
    </React.Fragment>
  );
};

export default NewChirp;
