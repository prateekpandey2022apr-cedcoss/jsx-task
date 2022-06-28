import React from "react";

function City(props) {
  const cities = [
    "Casablanca",
    "Beirut",
    "Havana",
    "Hawaii",
    "Delhi",
    "Georgia",
  ];
  return (
    <ul>
      {cities.sort().map((c) => (
        <li>{c}</li>
      ))}
    </ul>
  );
}

export default City;
