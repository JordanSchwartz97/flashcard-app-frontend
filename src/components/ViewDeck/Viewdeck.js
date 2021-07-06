import React from "react";
import "./ViewDeck.css";
import FlashcardViewer from "../FlashcardViewer/FlashcardViewer";
export default function ViewDeck(props) {
	return (
		<div>
			<table>
				<tr>
					<th id="name" className="name">
						Name
					</th>
					<th id="description" className="description">
						Description
					</th>
					<th id="id" className="id">
						id
					</th>
				</tr>
			</table>
			{props.deck.map((item) => {
				return (
					<table>
						<tr>
							<td id="name" className="name">
								{item.name}
							</td>
							<td id="description" className="description">
								{item.description}
							</td>
							<td id="id" className="id">
								{item._id}
							</td>
							<button onClick={FlashcardViewer}>View Deck</button>
						</tr>
					</table>
				);
			})}
		</div>
	);
}
