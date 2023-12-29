import "./App.css";
import React from "react";
import picture from "./picture.webp";
import Porfile from "./Profile";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Gojo Satoru",
        bio: "fictional character in the manga Jujutsu Kaisen",
        imgSRC: picture,
        profession: "Satoru is the current head of his family",
      },
      shows: false,
    };
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState({ shows: !this.state.shows })}>
          {this.state.shows ? "Hide" : "Show"}
        </button>
        {this.state.shows && (
          <Porfile
            fullName={this.state.person.fullName}
            bio={this.state.person.bio}
            imgSRC={this.state.person.imgSRC}
            profession={this.state.person.profession}
          />
        )}
      </div>
    );
  }
}

export default App;
