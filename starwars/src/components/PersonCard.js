import React from 'react';
import styled from "styled-components";

const Header1 = styled.h1`
    color: #443e3e;
    text-shadow: 1px 1px 5px #ffffff;

`;
 const Div = styled.div`
    background-color: #D1E8E2;opacity:0.8;
    border: 1px solid #FFCB9A;
    max-width: 30%;
    margin: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    jusitify-content: center;
    align-items: center;
    align-content: center;
    border-radius: .5rem;
 
 `
 const Para = styled.p`
    color: #116466;
    margin: 0.5rem;
 `;

 const Header2 = styled.h2`
    color: #2C3531;
 
 `;


function PersonCard({name, bday, gender,hair, height, mass}){
    return(
        <Div>
            <Header1>{name}</Header1>
            <Header2>Birth Year: {bday}</Header2>
            <Para>{name} is a height of {height} with a mass of {mass}</Para>
            <Para>{name} is {gender} with {hair} hair</Para>
        </Div>
    )
}

export default PersonCard;