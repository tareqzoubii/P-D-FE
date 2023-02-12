import React, { useState } from "react";

export default function Daily() {
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [dailyCalorie, setDailyCalorie] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (gender === 'male') {
     setDailyCalorie(66.47 + (13.75 * weight) + (5.003 * height) - (6.755 * age));
   } else if (gender === 'female') {
     setDailyCalorie(655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age));
   }
    console.log("Submitted: ", gender, height, weight, age, dailyCalorie);
    setIsSubmitted(true);
  };
  return (
    <>
      <h3> Daily Calorie Intake</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(event) => setGender(event.target.value)}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(event) => setGender(event.target.value)}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <label htmlFor="height">What is your height?</label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="weight">What is your weight?</label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">What is your age?</label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </div>
        <button type="submit">Calculate Your Daily Calorie Intake</button>
        {isSubmitted && <p>Your Daily Calorie that you need to take is {dailyCalorie} Calorie</p>}
      </form>
    </>
  );
}
