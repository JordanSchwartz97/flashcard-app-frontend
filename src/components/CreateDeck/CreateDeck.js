import React from 'react'
import "./CreateDeck.css";
export default function CreateDeck() {
    return (
       <div className="deck-card card">
       <form>
           <div className="form-group">
               <label for="titleFormGroup">Name of Deck</label>
               <input type="text" className="form-control" id="titleFormGroup" placeholder="Name of Deck"></input>
           </div>
           <div className="form-group">
               <label for="descriptionFormGroup">Description of Deck</label>
               <input type="text" className="form-control" id="descriptionFormGroup" placeholder="Description of Deck"></input>
           </div>
           <input class="btn btn-primary" type="submit" value="Add new Deck"></input>
       </form>
       </div>
    )
}
