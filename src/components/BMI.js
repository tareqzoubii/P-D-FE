import React, { useState } from "react";

export default function B() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBmi((weight / height ** 2) * 10000);
    console.log(
      "Form information",
      "Height:",
      height,
      "Weight:",
      weight,
      "Bmi:",
      bmi
    );
    setIsSubmitted(true);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>BMI</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Underweight</td>
            <td>less than 18.5</td>
          </tr>
          <tr>
            <td>Normal weight</td>
            <td>18.5-24.9</td>
          </tr>
          <tr>
            <td>Overweight</td>
            <td>25-29.9</td>
          </tr>
          <tr>
            <td>Obesity</td>
            <td>Greater than 30</td>
          </tr>
        </tbody>
      </table>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
        {isSubmitted && <p>Your Body Mass Index is {bmi}</p>}
      </form>
    </>
  );
}
