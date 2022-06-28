import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFiltredMonsters] = useState(monsters);

  console.log("render");

  // useEffect
  // 1) callback function = effect we want to happen in functions component
  // and 2) array of dependencies: most likely state or prop values
  // i.e. whenever value of these dependencies change is when run the callback function
  // so useEffect only runs 1) at beginning when entire function runs and then 2) when dependencies change
  // note: here we never want it to re-render so we add NO dependencies
  useEffect(() => {
    console.log("effect fired");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // returning response in json format
      .then((users) => setMonsters(users));
  }, []);

  // this useEffect => makes it more efficient because 
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFiltredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
