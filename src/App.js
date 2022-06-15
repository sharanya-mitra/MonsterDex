import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
    };
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then(
      (users)=> 
      this.setState(
        ()=>{return {monster:users}}
        )
      )
  }
  render() {
    return (
      <div className="App">
      <input className="Search-box"type="search"placeholder="Mosters name" onClick={(event)=>{
        console.log(event.target.value);
        
      }}/>
        {this.state.monster.map((monster) => {
          return <h1>{monster.name}</h1>;
        })}
      </div>
    );
  }
  
}

export default App;
