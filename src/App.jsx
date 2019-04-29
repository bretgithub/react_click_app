import React from 'react';
import Navbar from "./components/navbar/navbar"
import Header from "./components/header/header"
// import Content from "./components/content/content"
import Images from "./components/images/images"
import characters from "./characters.json"

import './App.css';

// setting up as a classful component instead of a functional component
class App extends React.Component {

  state = {
    score: 0,
    topScore: 0,
    maxScore: 12,
    message: "Click on a character to begin!",
    messageClass: "",
    characters: characters
  };

  handleGame = (name) => {
    let resetGame = false;
    const characters = this.state.characters.map(char => {
      if (char.name === name) {
        if (char.isClicked === false) {
          // this.handleCorrect()
          console.log("click")
          return { ...char, isClicked: true }
        } else {
          resetGame = true;
          return { ...char, isClicked: false }
        }
      }
      return char
    })

    if (resetGame) {
      this.setState({ characters: this.handleCharacters(characters) });
    }
  }



  handleCharacters = () => {
    return this.state.characters.map((character) =>
      <Images
        image={character.image}
        name={character.name}
        key={character.id}
        onClick={this.handleGame}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <Navbar
          score={this.state.score}
          topscore={this.state.topScore}
        />
        <Header />
        <div className="content">
          {this.handleCharacters()}
        </div>
      </div>
    );
  }
}

export default App;
