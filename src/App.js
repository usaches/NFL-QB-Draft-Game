import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import QB from "./QB.json";
import "./App.css";

class App extends Component {
  state = {
    QB,
    clickedQB: [],
    score: 0
  };







  imageClick = event => {
    const currentQB = event.target.alt;
    const QBAlreadyClicked =
      this.state.clickedQB.indexOf(currentQB) > -1;

    if (QBAlreadyClicked) {
      this.setState({
        QB: this.state.QB.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedQB: [],
        score: 0
      });
        alert("LOSER!");

    } else {
      this.setState(
        {
          QB: this.state.QB.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedQB: this.state.clickedQB.concat(
            currentQB
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 18) {
            alert("You Win!");
            this.setState({
              QB: this.state.QB.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedQB: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <div className="wrapper">
          {this.state.QB.map(QB => (
            <Cards
              imageClick={this.imageClick}
              id={QB.id}
              key={QB.id}
              image={QB.image}
            />
          ))}
        </div>
      <p id="inst"><br></br>Do Not Draft the same QB twice! Click a QB to draft him!</p>
      </div>
    );
  }
}
export default App;