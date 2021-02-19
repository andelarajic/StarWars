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
               
                 
                    <div key= {p.url}>
                    
                    <h1 className="Char" onClick={this.open} >{p.name}</h1>
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
    