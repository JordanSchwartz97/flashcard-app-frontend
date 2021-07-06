import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import axios from "axios";
import "./app.css";
import ViewDeck from "./ViewDeck/ViewDeck.js";
import e from "cors";
import CreateDeck from "./CreateDeck/CreateDeck";
import CreateCard from "./CreateCard/CreateCard";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deck: [],
			flashcards: [],
			deckNumber: 0,
			itemId: "",
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

	async getAllFlashcards() {
		try {
			let response = await axios.get(
				"http://localhost:5000/api/collections/cardDeck/"
			);
			console.log(response.data);
			this.setState({
				flashcards: response.data,
			});
		} catch (ex) {
			console.log(ex);
		}
	}

	async addNewDeck() {
		let addDeck = await axios.post("http://localhost:5000/api/collections");
		console.log(addDeck.data);
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
				{isLoaded ? <h1>Page is Loaded.</h1> : <h1>Loading...</h1>}
				<ViewDeck deck={this.state.deck} />
				<CreateDeck />
				<CreateCard />
			</div>
		);
	}
}

export default App;
