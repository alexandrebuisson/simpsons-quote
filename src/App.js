import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./Quote";
import { Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        working: true,
        homer: 'Working',
        logo: 'App-logo',
        color: 'warning'
    };
    }

    homerWork = () => {
      if (this.state.logo === 'alternative-logo'){
        this.setState({
          working: true,
          homer: 'TRAVAIL HOMER !',
          logo: 'App-logo',
          color: 'warning'      
        })
      } else {
        this.setState({
          working: false,
          homer: "C'est l'heure d'une p'tite pause",
          logo: 'alternative-logo',
          color: 'success'        
        })
      }      
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.logo} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Button color={this.state.color} onClick={this.homerWork}>{this.state.homer}</Button>
        <Quote
          quote="I believe the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />
        <Quote
          quote="Me fail English? That's unpossible"
          character="Ralph Wiggum"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
        />
      </div>
    );
  }
}

export default App;