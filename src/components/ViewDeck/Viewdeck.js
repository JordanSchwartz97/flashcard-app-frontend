import React from 'react';
import './ViewDeck.css';
export default function ViewDeck(props) {
    return (
        <div>
            <table>
                <tr>
                    <th id="name" className="name">Name</th>
                    <th id="description" className="description">Description</th>
                </tr>
            </table>
            {props.deck.map((item) => {
                return(
            <table>
                <tr>
                    <td id="name" className="name">{item.name}</td>
                    <td id="description" className="description">{item.description}</td>
                </tr>
            </table>
                )})}
        </div>
    )
}
