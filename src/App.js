import axios from "axios"
import { Component, useState } from 'react';
import './App.css';
import List from "../src/List/List"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      search: ""
    }
    this.getPeople = this.getPeople.bind(this);
  }

  async getPeople() {
    const response = await axios.get("https://swapi.dev/api/people");
    this.setState({ people: response.data.results });
    console.log(response.data.results)
  }

  componentDidMount() {
    this.getPeople()
  }


  render() {

    function filterListOfPeople(listOfPeople, filterWord) {
      return listOfPeople.filter(person => person.name.toLowerCase().includes(filterWord.toLowerCase()))
    }

    return (
      <div className="App">
        <div className="Image">
          <input className="Input" type="text" placeholder="Enter Name" onChange={(e) => this.setState({ search: e.target.value })} />
          <List people={filterListOfPeople(this.state.people, this.state.search)} />
        </div>
      </div>
    );
  }
}
export default App;
