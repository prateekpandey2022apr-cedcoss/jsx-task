import React from "react";

function City(props) {
  const cities = [
    "Casablanca",
    "Beirut",
    "Havana",
    "Hawaii",
    "Delhi",
    "Georgia",
    "Bengalore",
    "Bahamas",
  ];
  return (
    <ul>
      {cities
        .sort()
        .filter((c) => c.startsWith("B"))
        .map((c) => (
          <li>{c}</li>
        ))}
    </ul>
  );
}

export default City;
