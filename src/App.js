import axios from "axios"
import { Component } from 'react';
import './App.css';
import List from "../src/List/List"
import Background from "../src/Images/StarWars.jpg"

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      people: [],
    }
    this.getPeople = this.getPeople.bind(this);
    
  }
  getPeople() {
    return axios.get("https://swapi.dev/api/people").then((response)=> {
      this.setState( {people:response.data.results})
      console.log("click!")
    })
  }

 


componentDidMount(){
  this.getPeople()
}


  render() {
    const {people} = this.state; 
  return (
    <div className="App">
    
       <img className="Image" src={Background} alt="Game websida"></img>
  <input className="Input" type="text" placeholder="Enter Name" onChange={(e) => this.getPeople(e.target.value)} />
  <List people={people}/>
    </div>
  );
}
}
export default App;
