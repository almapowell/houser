import React, { Component } from 'react'

export default class House extends Component {
    constructor() {
        super() 

        this.state = {
            
        }
    }




    render() {
        return (
            <div>
                <h1>House</h1>
                
                

                <button onClick={this.props.deleteHouse}>Delete</button>
            </div>
        )
    }
}
