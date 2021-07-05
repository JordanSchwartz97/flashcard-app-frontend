import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import axios from "axios";
import "./app.css";
import ViewDeck from "./ViewDeck/ViewDeck.js";
import e from "cors";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deck: [],
		};
	}

	componentDidMount() {
		this.getAllDecks();
		console.log("component did mount");
	}

	async getAllDecks() {
		try {
			let response = await axios.get(
				"http://localhost:5000/api/collections/cardDeck"
			);
			console.log(response.data);
			this.setState({
				deck: response.data,
			});
		} catch (ex) {
			console.log(ex);
		}
	}

	render() {
		let count = this.state.deck.length;
		let isLoaded = false;
		if (count > 0) {
			isLoaded = true;
		}

		return (
			<div>
				<Navbar />
				{isLoaded ? <h1>{count}</h1> : <h1>Loading...</h1>}
				<ViewDeck deck={this.state.deck} />
			</div>
		);
	}
}

export default App;
