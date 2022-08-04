import React from "react";

export default function Meaning(props){
    console.log(props.meaning)
    return (
    <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index){
        return (
            <div key={index}>
                <p>
                    {definition.definition}
                    <br />
                    <em>{definition.example}</em>
                </p>
            </div>
        );
        })}
    </div>
    )
}

// Includes multiple definitions 
// Displays part of speech and loops through all the defs to dispay defs and examples
// Looping through all the definitions with map
// <p>{props.meaning.definitions[0].definition}</p> replaces with {definition.definition}