import { Component } from 'react';


class CharInfo extends Component {
    constructor(props) {
        super(props);

      this.state = {
            expanded:false,
        }
        this.open = this.open.bind(this);
        this.close = this.open.bind(this);
    }
    open (){
        this.setState({expanded:!this.state.expanded})
    }
    close (){
        this.setState({expanded:!this.state.expanded})
    }
    render(){
        const info = this.props.CharInfo;
     
        if(!this.state.expanded){
            
            return <h1 className="Char" onClick={this.open}>{info.name}</h1>
        }
  
        return(
            <div>
                <h1 className="Char" onClick={this.close}>{info.name}</h1>
                <ul>
                    <li className="unstyled"><h2>Gender: {info.gender}</h2></li>
                    <li className="unstyled"><h2>Birth date: {info.birth_year} </h2></li>
                    <li className="unstyled"><h2>Eye color: {info.eye_color}</h2></li>
                    <li className="unstyled"><h2>Hair color: {info.hair_color}</h2></li>
                </ul>
            </div>
        

    )}
}

    export default CharInfo;