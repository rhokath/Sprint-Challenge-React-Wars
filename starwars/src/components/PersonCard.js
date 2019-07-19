import React from 'react';


function PersonCard({name, bday, gender,hair, height, mass}){
    return(
        <div>
            <h1>Name:{name}</h1>
            <h2>Birth Year:{bday}</h2>
            <p>{name} is a height of {height} with a mass of {mass}</p>
            <p>{name} is {gender} with {hair} hair</p>
        </div>
    )
}

export default PersonCard;