import React from "react";

import NavBar from "./components/NavBar";
// import Comment from './components/Comment';
// import ComposeBtn from './components/ComposeBtn';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chirps: [
        {
          username: "Sydni",
          message: "some text",
        },
        {
          username: "Tasha",
          message: "some text",
        },
        {
          username: "Autumn",
          message: "some text",
        },
      ],
    };
  }
  render() {
    return (
      <>
      <div>
<nav className="navbar navbar-light bg-dark">
  <a className="navbar-brand text-white">Chirper</a>
  <button id='navBar-btn' className="btn btn-outline-light my-2 my-sm-0" type="btn">Search
  </button> 
</nav>
    </div>
        {
          this.state.chirps.map((chirp) => {
            return (
              <React.Fragment>
                <div style={{border: '5px solid black', margin: '2em 0'}}>
                <h1>{chirp.username}</h1>
                <p>{chirp.message}</p>
                </div>
              </React.Fragment>
            );
          })
        }

      
      </>
    )
  }
}

export default App;
