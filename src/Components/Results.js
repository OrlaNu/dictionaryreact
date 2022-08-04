import React from "react";
import Meaning from "./Meaning";

export default function Result(props) {
    if (props.results){
    return (
        <div className="Results">
            <h2>{props.results.word} {props.results.phonetic}</h2>
            {props.results.meanings.map(function(meaning, index){
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                )
            })}
        </div>
    );
} else {
    return null;
    }
}


// Do we have results? If no returns null if yes returns given word 
// Map to loop through all the meanings on API response
// Meanings inside object in an array. Looping through to get the definitions and send to Meaning component