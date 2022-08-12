import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";
export default function Result(props) {
    if (props.results) {
    return (
        <div className="Results">
            <section>
                <h2>{props.results.word}</h2>
                {props.results.phonetics.map(function(phonetic, index)
                {
                    return (
                        <div key={index}>
                            <Phonetic phonetic={phonetic} />
                        </div>
                    );
                })}
            </section>
            {props.results.meanings.map(function(meaning, index){
                return (
                    <section key={index}>
                        <Meaning meaning={meaning} />
                    </section>
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