import React from "react";
import "./CreateCard.css";
export default function CreateCard() {
	return (
		<div className="card-card card">
			<form>
				<div className="form-group">
					<label for="DeckFormGroup">Name of Deck</label>
					<input
						type="text"
						className="form-control"
						id="DeckNameFormControl"
						placeholder="Name of Deck"
					></input>
					<small id="deckHelp" class="form-text text-muted">
						Enter the name of the Deck you would like to add a flashcard too.
					</small>
				</div>
				<div className="form-group">
					<label for="FrontFormGroup">Front content of Flashcard</label>
					<input
						type="text"
						className="form-control"
						id="FrontFormGroup"
						placeholder="Front of flashcard"
					></input>
				</div>
				<div className="form-group">
					<label for="BackFormGroup">Back content of Flashcard</label>
					<input
						type="text"
						className="form-control"
						id="BackFormGroup"
						placeholder="Back of flashcard"
					></input>
				</div>
				<input
					class="btn btn-primary"
					type="submit"
					value="Add new Flashcard"
				></input>
			</form>
		</div>
	);
}
