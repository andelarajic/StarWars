import { Component } from 'react';
import CharInfo from "../CharInfo/CharInfo"
import "../List/List.css"


class List extends Component {
    render(){
        const people = this.props.people;
      return (
        <div className="List">
         {
            people.map((p)=> {
              console.log(p)
              return(
                <CharInfo CharInfo={p}/>
              )
            })
         }
        </div>
  
      );
        }
    }
    export default List;
    