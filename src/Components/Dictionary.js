import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`); 
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} autoFocus={true}/>
        </form>
    </div>;
}

// OnSubmit is an event listener. Listening to the function search
// When form is subbmitted the search function is called
// search(event) - recieves the event and prevents default behaviour which is reloading the page on submit
// useState is used as the value will change within the lifecycle of the component
// handleKeywordChange sets/updates the state of keyword to event.target.value of the searched word. Value of searched word is storded in the state