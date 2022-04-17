import { Component } from "react";

export default class PropsWithClass extends Component{
render(){
    console.log(this.props)
    return(
        <div>
            <h1>{this.props.name}</h1>
        </div>
    )
}
}