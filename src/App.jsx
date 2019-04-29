// Required dependecies and imports
import React from 'react';
import Navbar from "./components/navbar/navbar"
import Header from "./components/header/header"
import Images from "./components/images/images"
import characters from "./characters.json"
import './App.css';

// Setting up as a classful component instead of a functional component
class App extends React.Component {

  // Set state object 
  state = {
    score: 0,
    topScore: 0,
    maxScore: 12,
    message: "Click on a character to begin!",
    messageClass: "",
    characters: characters
  };

  // Shuffle method to shuffle images around on screen
  shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there are images to shuffle there 
    while (0 !== currentIndex) {

      // At random pick an image
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // Swap with another image
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    // Return the array
    return array;
  }

  // Game method 
  handleGame = (name) => {
    let resetGame = false;
    const characters = this.state.characters.map(char => {
      // If image is clicked 
      if (char.name === name) {
        // If character image isClicked is false
        if (char.isClicked === false) {
          // Run handleCorrect method
          this.handleCorrect()
          // Log to see if click works
          console.log("click")
          // Change value of isClicked from false to true
          return { ...char, isClicked: true }
        } else {
          // Reset the game if you click an image that is isClicked is true
          resetGame = true;
          // Change value of isClicked back to false
          return { ...char, isClicked: false }
        }
      }
      // Return char
      return char
    })

    // Handle game reset 
    if (resetGame) {
      this.setState({
        characters: this.shuffle(this.handleIncorrect()),
        messageClass: "incorrect",
      })

    } else {
      // Check if game is won before rendering characters
      this.setState({ characters: this.shuffle(this.handleWin(characters)) })
    }
  }

  // Correct selection method handleCorrect
  handleCorrect = () => {
    // Handles if your score is above topScore
    if (this.state.score + 1 > this.state.topScore) {
      // Sets state to reflect new top score
      this.setState({ topScore: this.state.topScore + 1 })
    }
    // Handles win
    if (this.state.score === this.state.maxScore) {
      // Sets state to handle win with message
      this.setState({ score: this.state.score + 1, message: "You've won, you saved the 7 Kingdoms", messageClass: "correct" })
    }
    else {
      // Sets state with update of score and message
      this.setState({ score: this.state.score + 1, message: "You've guessed correctly", messageClass: "correct" })
    }
  }

  // Win method handleWin
  handleWin = (currentCharacters) => {
    // If current score is at max reset score to 0 and topScore to 0, game reset
    if (this.state.score + 1 === this.state.maxScore) {
      this.setState({ score: 0, topScore: 0 })
      // Reset clicked state for characters
      const updatedCharacters = currentCharacters.map(ch => (true) ? { ...ch, isClicked: false } : ch)
      return updatedCharacters
    } else {
      return currentCharacters
    }
  }

  // Incorrect method handleIncorrect
  handleIncorrect = () => {
    // Incorrect selection made, reset score to 0
    this.setState({ score: 0, message: "You guessed incorrectly, Winter is here" })
    // Reset clicked state for characters
    const updatedCharacters = this.state.characters.map(ch => ch.isClicked === true ? { ...ch, isClicked: false } : ch)
    return updatedCharacters
  }

  // Character display method handleCharacters
  handleCharacters = () => {
    return this.state.characters.map((character) =>
      // Display images with properties, set in characters.json
      <Images
        image={character.image}
        name={character.name}
        key={character.id}
        onClick={this.handleGame}
      />
    );
  }

  // Render page
  render() {
    return (
      <div className="App">
        {/* Navbar classful component */}
        <Navbar
          // Display information to the user
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
          messageClass={this.state.messageClass}
        />
        {/* Header classful component */}
        <Header />
        <div className="content">
          {/* Display characters */}
          {this.handleCharacters()}
        </div>
      </div>
    );
  }
}

export default App;
