import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [villagers, setVillagers] = useState([]);
  //current villager is used to load details on clicked villager
  const [currentVillager, setcurrentVillager] = useState([]);

  useEffect(() => {
    //load villagers into a list
    fetch("data/data.json")
      .then((result) => result.json())
      .then((data) => {
        //console.log(data);
        setVillagers(data);
        //console.log(data);
      });
  });

  //villager list using map, display the villager name and icon
  const villagerList = villagers.map((villager) => (
    //div on click will show details of villager
    <div className="villager">
      <div id="villager-icon">
        <img
          src={villager.icon}
          alt={villager.Name}
          onClick={() => {
            setcurrentVillager(villager.id);
            console.log(currentVillager);
          }}
        />
      </div>
      <div id="villager-name">{villager.Name}</div>
    </div>
  ));

  //display all villagers in a grid
  //when villager is picked, switch to a detailed page with information about that villager
  //add villager into a list of favorites that can be accessed from a list
  //villagers bounce when hovered over
  //favorites and current island villagers tab at side that slides out
  //fix white outline on styling
  //fix icon/name sizes

  return (
    <div className="App">
      <h1>Villager Database</h1>
      <button
        id="favorites-button"
        onClick={() => {
          console.log("favorites");
        }}
      >
        ☆
      </button>
      <div id="villagers">{villagerList}</div>
    </div>
  );
}
