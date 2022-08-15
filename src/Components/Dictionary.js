import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleResponse(response){
        setResults(response.data[0])
    }

    function handlePexelsResponse(response){
        setPhotos(response.data.photos);
    }

    function search() {
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

        let pexelsApiKey = "563492ad6f91700001000001c674ae1454ba437b9652dd0aa11fb552";
        let pexelsApiUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    function load(){
        setLoaded(true);
        search();        
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    if (loaded) {
        return( <div className="Dictionary">
            <section className="Search">
                <h1>Search for a word</h1>
                <form onSubmit={handleSubmit}>
                    <input type="search"  onChange={handleKeywordChange} autoFocus={true} 
                    defaultValue={props.defaultKeyword}/>
                </form>
            </section>
            <Result results={results} />
            <Photos photos={photos} />
            </div>
        );
    } else {
        load();
        return "Loading";
    }
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
// Authenticating through headers rather than a key in the URL
// To retreive photos set state, then in function add path in the api e.g. Photos can be found - response.data.photos