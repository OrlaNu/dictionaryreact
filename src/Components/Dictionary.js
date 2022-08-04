import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Results";

export default function Dictionary(){
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response){
        console.log(response.data[0]);
        setResults(response.data[0])
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
        <Result results={results} />
    </div>;
}

// OnSubmit is an event listener. Listening to the function search
// When form is subbmitted the search function is called
// search(event) - recieves the event and prevents default behaviour which is reloading the page on submit
// useState is used as the value will change within the lifecycle of the component
// handleKeywordChange sets/updates the state of keyword to event.target.value of the searched word. Value of searched word is storded in the state
// API doc https://dictionaryapi.dev/ 
// Handle response function gets the response from axios and API call
// axios added for API call. promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data
// Need to send info from  handleResponse to Results component using a State
// State tracks the content of word typed by the user
// setResults is the function that changes content of the state. Results state is updated everytime we get a response from the API
// When ever the state updates the component is recompiled