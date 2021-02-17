import { Component } from 'react';
import CharInfo from "../CharInfo/CharInfo"

class List extends Component {
    render() {
        const people = this.props.people; 
      return (
        <div className="List">
         {
            people.map((p)=> {
                console.log(p)
                return(
                    <div key= {p.url}>
                    <h1 className="characters" >{p.name}</h1>
                    <CharInfo charInfo={p} />
                    </div>
                )
            } )
         }
        </div>
      );
    }
    }
    export default List;
    