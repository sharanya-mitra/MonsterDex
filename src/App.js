// import logo from "./logo.svg";
import CardList from "./Components/Card-List/card-list.components";
import SearchBox from "./Components/search-box/search-box.components";
import "./App.css";
// import { render } from "@testing-library/react";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      searchFild: "",
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
  onSearchChange = (event) => {
    const searchFild = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchFild };
    });
  };
  render() {
    const { monster, searchFild } = this.state;
    const { onSearchChange } = this;
    const filteredmonster = monster.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchFild);
    });
    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange}/>
        <CardList monster={filteredmonster} />
      </div>
    );
  }
}
export default App;
