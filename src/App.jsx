import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Player from "./Player";
import Singer from "./Singer";

function App() {
  const player = ["sakib", "liton", "miraz", "tamim"];
  const singer = [
    { id: 1, name: "arfin", age: 25 },
    { id: 2, name: "balam", age: 24 },
    { id: 3, name: "hasan", age: 28 },
    { id: 4, name: "pritom", age: 29 },
    { id: 5, name: "porshi", age: 19 },
  ];

  return (
    <>
      <h1>Vite + React</h1>
      {
        singer.map(singer=><Singer singer={singer}></Singer>)
      }
      {player.map((player) => (
        <Player name={player}></Player>
      ))}
      {/* <Todo></Todo> */}
      {/* <Device name='Laptop' price='55500'></Device>
      <Device name='Mobile' price='23000'></Device>
      <Person></Person>
      <Student name='Anonno Das' age='26' profession='Student'></Student>
      <Developer name='Anonno Das'></Developer> */}
    </>
  );
}
function Person() {
  const age = 25;
  const person = {
    name: "anonno",
    age: 30,
  };
  return (
    <h3>
      I am {person.name} with age: {age}
    </h3>
  );
}
function Student({ name, age, profession }) {
  return (
    <div className="student">
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Profession: {profession}</h3>
    </div>
  );
}
function Developer({ name }) {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid skyblue",
    borderRadius: "20px",
  };
  return (
    <div style={developerStyle}>
      <h3>I am developer</h3>
      <h3>Name: {name}</h3>
    </div>
  );
}
function Device(props) {
  return (
    <h3>
      This device: {props.name} & Price: {props.price}
    </h3>
  );
}
export default App;
