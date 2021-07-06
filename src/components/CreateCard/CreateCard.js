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
						id="titleFormGroup"
						placeholder="Name of Deck"
					></input>
					<small id="emailHelp" class="form-text text-muted">
						Enter the name of the Deck you would like to add a flashcard too.
					</small>
				</div>
				<div className="form-group">
					<label for="descriptionFormGroup">Front content of Flashcard</label>
					<input
						type="text"
						className="form-control"
						id="descriptionFormGroup"
						placeholder="Front"
					></input>
				</div>
				<div className="form-group">
					<label for="descriptionFormGroup">Description of Deck</label>
					<input
						type="text"
						className="form-control"
						id="descriptionFormGroup"
						placeholder="Description of Deck"
					></input>
				</div>
				<input
					class="btn btn-primary"
					type="submit"
					value="Add new Deck"
				></input>
			</form>
		</div>
	);
}
