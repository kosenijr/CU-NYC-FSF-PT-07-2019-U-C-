import React from 'react';
import logo from './logo.svg';
import './App.css';
import images from "./images.json";
import Game from "./components/Game";

class App extends React.Component {
  state = {
    images: images,
    score:0,
    pastSelections: []
  }

  handleCardClick = () => {
    // check if inside past selection
    // call correct / incorrect
  }

  correct = () =>{
    // score up
    // msg change
    // call shuffle
  }

  incorrect = () =>{
    // msg change
    // call shuffle

  }
  shuffle = () => {
    // rearage cards
    // set to state
  }
  
  render() {
    console.log(images);
    return (<div className="App">
     <Game cards={this.state.images}/>
    </div>
  )
    }
}

export default App;
