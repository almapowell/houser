import React, { Component } from 'react'
import House from '../House/House'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
    }

    // componentDidMount() {
    //     axios.get('/api/houses').then(res => {
    //         console.log(res.data)
    //         this.setState({
    //             houses: res.data
    //         })
    //     })
    // }

    deleteHouse = id => {
        axios.delete(`/api/house/${id}`).then(res => {
            this.setState({
                houses: res.data
            })
        })
    }



    render() {
        const mappedHouses = this.state.houses.map((house, index) => {
            return (
                    <House 
                    key={index}
                    house={house}                    
                    />
            )
        })
        return (
            <div>
                <h1>Dashboard</h1>
                <House deleteHouse={this.deleteHouse} />
                <Link to={'/wizard'}><button>Add New Property</button></Link>
                {mappedHouses}

            </div>
        )
    }
}
