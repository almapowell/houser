import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component {
    constructor() {
        super() 

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    createHouse() {
        axios.post('/api/house').then(res => {
            const { name, address, city, state, zipcode } = res.data
            this.setState({
                name, address, city, state, zipcode
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Wizard</h1>
                <Link to="/"><button>Cancel</button></Link>
                <form>
                    <input type="text"
                    placeholder="Property Name"
                    name="name"
                    onChange={this.handleInput}
                    /> <br/>
                    <input type="text"
                    placeholder="Address"
                    name="address"
                    onChange={this.handleInput}
                    /> <br/>
                    <input type="text"
                    placeholder="City"
                    name="city"
                    onChange={this.handleInput}
                    />
                    <input type="text"
                    placeholder="State"
                    name="state"
                    onChange={this.handleInput}
                    />
                    <input type="number"
                    placeholder="Zip"
                    name="zipcode"
                    onChange={this.handleInput}
                    />
                </form>

            </div>
        )
    }
}
