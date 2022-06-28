import React from "react";

const cal_factorial = (num) => {
  let fact = 1;

  for (let n = num; n > 1; n--) {
    fact = fact * n;
  }

  return fact;
};

function Factorial(props) {
  return (
    <h1>
      Factorial of {props.num} is {cal_factorial(props.num)}
    </h1>
  );
}

export default Factorial;
