import React from "react";
import NavBar from "./components/NavBar";
import NewChirp from "./components/NewChirp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUsername: "",
      newMessage: "",
      chirps: [
        {
          username: "Sydni",
          message: "Hello!",
        },
        {
          username: "Tasha",
          message: "This is built with...",
        },
        {
          username: "Autumn",
          message: "React!",
        },
      ],
    };
    this.handleNewUsername = this.handleNewUsername.bind(this);
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNewUsername(e) {
    this.setState({ newUsername: e.target.value });
    console.log(this.state.newUsername);
  }

  handleNewMessage(e) {
    this.setState({ newMessage: e.target.value });
    console.log(this.state.newMessage);
  }

  handleSubmit(e) {
    let newChirp = {
      username: this.state.newUsername,
      message: this.state.newMessage,
    };
    this.setState({ chirps: [...this.state.chirps, newChirp] });
  }

  render() {
    return (
      <>
        <div className="container">
          <NavBar />
          {this.state.chirps.map((chirp) => {
            return (
              <>
                <div
                  className="card text-center w-75"
                  style={{ margin: "2em auto" }}
                >
                  <div className="card-header">{chirp.username}</div>
                  <div className="card-body">
                    {/* <h5 class="card-title">{chirp.title}</h5> */}
                    <p className="card-text">{chirp.message}</p>
                    {/* <button id='new-Comment-Btn' type="button" onClick={this.NewChirp}>Edit Chirp
                </button> */}
                  </div>
                </div>
              </>
              // this.state.chirps.map((chirp) => {
              //       return (
              //         <React.Fragment>
              //           <div style={{ border: '5px solid black', margin: '2em 0' }}>
              //             <h1>{chirp.username}</h1>
              //             <p>{chirp.message}</p>
              //           </div>
              //         </React.Fragment>
            );
          })}
          <NewChirp
            handleNewUsername={this.handleNewUsername}
            handleNewMessage={this.handleNewMessage}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </>
    );
  }
}

export default App;
