import React from 'react';
import Navbar from "./components/navbar/navbar"
import Header from "./components/header/header"
import './App.css';

// setting up as a class instead of a function
class App extends React.Component {
  // Setting the initial state of the App component
  constructor() {
    super()
    // this.handleShuffleChararcters = this.handleShuffleChararcters.bind(this)
  }

  state = {
    score: 0,
    topScore: 0,
    maxScore: 12,
    message: "Click on a character to begin!",
    messageClass: "",
    // characters: characters
  };

  render() {
    return (
      <div className="App">
        <Navbar
          score={this.state.score}
          topscore={this.state.topScore}
          message={this.state.message}
          messageClass={this.state.messageClass}
        />
        <Header>

        </Header>
        {/* <Header />
        <div className="content">
          {this.handleCharacters()}
        </div>
        <Footer /> */}
      </div>
    );
  }

}

export default App;
