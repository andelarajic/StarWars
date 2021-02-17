import { Component } from 'react';
import{people} from "../List/List"


class Charinfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        }
    }
open (){
    console.log("hwj")
    this.setState({expanded:!this.state.expanded})
}
close (){
    this.setState({expanded:!this.state.expanded})
}


    render() {
 
        return (
            <div>

            </div>
        )}
    }

            export default Charinfo;