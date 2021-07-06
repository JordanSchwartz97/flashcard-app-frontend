import React from "react";

export default function FlashcardViewer(props) {
	return (
		<div>
			<div className="row row-spacer">
				<div className="col">
					{/* {Button here to move to the previous book viewed} */}
				</div>
				<div className="col">
					<h1>{props.deck[props.deckNumber].name}</h1>
				</div>
				<div className="col">
					{/* {Button here to move to the next book} */}
				</div>
				<div className="col">{/* {Flashcard Counter} */}</div>
			</div>
		</div>
	);
}
