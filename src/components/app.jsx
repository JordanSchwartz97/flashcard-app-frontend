import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import axios from 'axios';
import './app.css';
import Deck from './ViewDeck/Viewdeck';

export class App extends Component {
    constructor(props)
    {   
        super(props)
        this.state = 
        { 
          deck: []
        }
    }
    componentDidMount(){
        
    };
    async getAllDecks(){
        axios.get('http://localhost:5000/api/collections/cardDeck')
        .then(response => this.setState({
            deck: response.data
        }));  
    }
    render() {
        return (
            <div>
                <Navbar/>

            </div>
        )
    }
    }

export default App
