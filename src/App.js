// import logo from "./logo.svg";
import "./App.css";
// import { render } from "@testing-library/react";
import { Component } from "react";
class App extends Component {
  
  constructor() {
    super();
    this.state = {
      monster: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monster: users };
        })
      );
  }


  render() {

    return (
      <div className="App">
        <input className="search-box" type="search" placeholder="Search Monsters"
          onChange={(event) => {console.log(event.target.value);
            const searchstring = event.target.value.toLocaleLowerCase();
            const filteredmonster = this.state.monster.filter((monsters)=>{
              return monsters.name.toLocaleLowerCase().includes(searchstring);
            });
            this.setState(()=>{
              return {monster:filteredmonster};
            });
            }}
        />
        {this.state.monster.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
