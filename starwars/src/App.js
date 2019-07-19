import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import PersonCard from "./components/PersonCard";
import PeopleGrid from "./components/PersonCard";
import { GridDiv } from "./components/PeopleGrid";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://swapi.co/api/people/")
    .then(res => {
      console.log("this is my response", res)
      console.log(res.data.results)
      const starwarspeople = res.data.results
      setData(starwarspeople);
    })
    .catch(error => {
      console.log("this is an error", error)
    })


  }, [])
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <GridDiv>
      {data.map( (item, index) => {
        console.log(item)
        return <PersonCard key={index}
         name={item.name} 
         bday={item.birth_year}
         gender={item.gender}
         hair={item.hair_color}
         height={item.height}
         mass={item.mass}
         />
      })}
      </GridDiv>
    </div>
  );
}

export default App;
