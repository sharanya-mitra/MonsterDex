// import logo from "./logo.svg";
import "./App.css";
// import { render } from "@testing-library/react";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchFild:''
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
    const filteredmonster = this.state.monster.filter((monsters)=>{
      return monsters.name.toLocaleLowerCase().includes(this.state.searchFild);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={(event) => {
            console.log(event.target.value);
            const searchFild = event.target.value.toLocaleLowerCase();
            this.setState(()=>{
              return {searchFild};
            });
            }}
        />
        {filteredmonster.map((monster) => {
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
