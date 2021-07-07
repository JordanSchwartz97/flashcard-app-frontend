import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import axios from "axios";
import "./app.css";
import ViewDeck from "./ViewDeck/ViewDeck.js";
import e from "cors";
import CreateDeck from "./CreateDeck/CreateDeck";
import CreateCard from "./CreateCard/CreateCard";
import FlashcardViewer from "./FlashcardViewer/FlashcardViewer";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			deck: [],
			flashcards: [],
			cardNumber: 0,
			itemId: "",
			selectedDeck: [],
		};
	}

	componentDidMount() {
		this.getAllDecks();
		console.log("component did mount");
		console.log(this.state.selectedDeck);
	}
	async getAllDecks() {
		try {
			let response = await axios.get(
				"http://localhost:5000/api/collections/cardDeck"
			);
			console.log(response.data);
			this.setState({
				deck: response.data,
				selectedDeck: response.data[0].cardDeck,
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

	goToNextCard() {
		let tempCardNumber = this.state.cardNumber;
		tempCardNumber++;
		if (tempCardNumber === this.deck.length) {
			tempCardNumber = 0;
		}
		this.setState({
			cardNumber: tempCardNumber,
		});
	}
	goToNextCard() {
		let tempCardNumber = this.state.cardNumber;
		tempCardNumber--;
		if (tempCardNumber < 0) {
			tempCardNumber = this.deck.length - 1;
		}
		this.setState({
			cardNumber: tempCardNumber,
		});
	}

	render() {
		let count = this.state.deck.length;
		let isLoaded = false;

		if (count > 0) {
			isLoaded = true;
		}
		console.log(this.state.selectedDeck);
		return (
			<div>
				<Navbar />
				{isLoaded ? <h1>{this.state.deck.length}</h1> : <h1>Loading...</h1>}
				<ViewDeck deck={this.state.deck} />
				<CreateDeck />
				<CreateCard />
				<FlashcardViewer selectedDeck={this.state.selectedDeck} />
			</div>
		);
	}
}

export default App;
