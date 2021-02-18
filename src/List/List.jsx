import { Component } from 'react';
import CharInfo from "../CharInfo/CharInfo"

class List extends Component {
    render(){
        const people = this.props.people;
      return (
        <div className="List">
         {
            people.map((p)=> {
                console.log(p)
                return(
                    <div key= {p.url}>
                    <h1 className="CharName" onClick={this.open} >{p.name}</h1>
                   <CharInfo CharInfo={p}/>
                    </div>
                )
            } )
         }
        </div>
      );
        }
    }
    export default List;
    