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
  const numbers = [...Array(101).keys()].slice(1);
  const primes = numbers.filter((num) => is_prime(num));

  return (
    <ul>
      {primes.map((num) => (
        <li key={num}>{num}</li>
      ))}
    </ul>
  );
}

export default Prime;
