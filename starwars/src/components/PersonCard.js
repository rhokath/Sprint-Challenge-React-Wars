import React from 'react';
import styled from "styled-components";

const Header1 = styled.h1`
    color: #2C3531;
    border: 1px solid #D9B08C;
    

`;
 const Div = styled.div`
    background-color: #D1E8E2;
    border: 1px solid red;
    max-width: 30%;
    margin: 2rem;
    padding: 1rem;
 
 `
 const Para = styled.p`
    color: #116466;
 `;

 const Header2 = styled.h2`
    color: #FFCB9A;
 
 `;


function PersonCard({name, bday, gender,hair, height, mass}){
    return(
        <Div>
            <Header1>Name: {name}</Header1>
            <Header2>Birth Year: {bday}</Header2>
            <Para>{name} is a height of {height} with a mass of {mass}</Para>
            <p>{name} is {gender} with {hair} hair</p>
        </Div>
    )
}

export default PersonCard;