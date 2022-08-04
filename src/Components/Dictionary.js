import axios from "axios";
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

    function handleResponse(response){
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault(); 

        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse);
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