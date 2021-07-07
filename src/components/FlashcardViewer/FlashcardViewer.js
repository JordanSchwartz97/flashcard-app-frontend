import React from "react";
import "./FlashcardViewer.css";
export default function FlashcardViewer(props) {
	console.log("flashcard viewer is running");
	console.log(props);
	{
		// props.selectedDeck.map((item) => {
		return (
			<div>
				<div className="row row-spacer">
					<div className="col">
						<button onClick={() => this.goToPreviousCard()}>
							Previous Card
						</button>
					</div>
					<div className="col">
						<h1 className="front">test</h1>
						<h1 className="back">test</h1>
					</div>
					<div className="col">
						<button onClick={() => this.goToNextCard()}>Next Card</button>
					</div>
					<div className="col">{/* {Flashcard Counter} */}</div>
				</div>
			</div>
		);
		// });
	}
}
