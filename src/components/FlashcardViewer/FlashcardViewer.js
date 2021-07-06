import React from "react";
import "./FlashcardViewer.css";
export default function FlashcardViewer(props) {
	console.log("flashcard viewer is running");
	return (
		<div>
			<div className="row row-spacer">
				<div className="col">
					<button onClick={() => this.goToPreviousCard()}>Previous Card</button>
				</div>
				<div className="col">
					<h1 className="title">{props.deck.cardDeck.title}</h1>
				</div>
				<div className="col">
					<button onClick={() => this.goToNextCard()}>Next Card</button>
				</div>
				<div className="col">{/* {Flashcard Counter} */}</div>
			</div>
		</div>
	);
}
