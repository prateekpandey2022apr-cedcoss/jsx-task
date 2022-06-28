import React from "react";

const is_prime = (num) => {
  let flag = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      flag = true;
      return false;
    }
  }

  return flag;
};

function Prime(props) {
  const numbers = [...Array(101).keys()];
  return (
    <ul>
      {numbers.map((num) => (
        <li key={num}>
          {num} is prime? {is_prime(num) ? "Yes" : "No"}
        </li>
      ))}
    </ul>
  );
}

export default Prime;
