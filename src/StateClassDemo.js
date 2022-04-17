////state Demo with class component 

import { Component } from 'react'

class StateClassDemo extends Component {
    constructor(){
        super()
        this.state={data:'Akhil',count:1}
    }
    update(){
        this.setState({data:'Jain'})
        this.setState({count:this.state.count+1})
    }
    render() {
        return (
            <div>
                <h1>State with class component</h1>
                <h3>{this.state.count}</h3>
                <h3>{this.state.data}</h3>
                <button onClick={()=>this.update()}>Update Data</button>
            </div>
        )
    }
}
export default StateClassDemo;