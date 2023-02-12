import React, { useState, useEffect } from "react";
import "./Diet.css";

export default function Diet() {
  const [highChecked, setHighChecked] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
  });
  const [lowChecked, setLowChecked] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
    checkbox7: false,
    checkbox8: false,
    checkbox9: false,
    checkbox10: false,
  });
  
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const handleHighCheckboxChange = (event) => {
    setHighChecked({
      ...highChecked,
      [event.target.name]: event.target.checked,
    });
  };

  const handleLowCheckboxChange = (event) => {
    setLowChecked({ ...lowChecked, [event.target.name]: event.target.checked });
  };
  return (
     <form>
     <div class="checkbox-container">
       <h3>Find Your Diet</h3>
       <div class="checkbox-row">
         <div class="checkbox">
           <input
             type="checkbox"
             name="highsugar"
             checked={highChecked.highsugar}
             onChange={handleHighCheckboxChange}
           />
           High Sugar
         </div>
         <div class="checkbox">
           <input
             type="checkbox"
             name="highiron"
             checked={lowChecked.highiron}
             onChange={handleLowCheckboxChange}
           />
           High Iron
         </div>
         <div class="checkbox">
           <input
             type="checkbox"
             name="highprotein"
             checked={highChecked.highprotein}
             onChange={handleHighCheckboxChange}
           />
           High Protein
         </div>
         <div class="checkbox">
           <input
             type="checkbox"
             name="highcalories"
             checked={lowChecked.highcalories}
             onChange={handleLowCheckboxChange}
           />
           High Calories
         </div>
         </div>
         <div class="checkbox-row">
         <div class="checkbox">
           <input
             type="checkbox"
             name="lowsugar"
             checked={highChecked.lowsugar}
             onChange={handleHighCheckboxChange}
           />
           Low Sugar
         </div>
         <div class="checkbox">
           <input
             type="checkbox"
             name="lowiron"
             checked={highChecked.lowiron}
             onChange={handleHighCheckboxChange}
           />
           Low Iron
         </div>
         <div class="checkbox">
           <input
             type="checkbox"
             name="lowprotein"
             checked={highChecked.lowprotein}
             onChange={handleHighCheckboxChange}
           />
           Low Protein
         </div>
         <div class="checkbox">
           <input
             type="checkbox"
             name="lowcalories"
             checked={highChecked.lowcalories}
             onChange={handleHighCheckboxChange}
           />
           Low Calories
         </div>
         </div>
         <div class="checkbox-row2">
         <div class="checkbox">
           <input
             type="checkbox"
             name="highpotassium"
             checked={highChecked.highpotassium}
             onChange={handleHighCheckboxChange}
           />
           High Potassium
         </div>
         <div class="checkbox">
           <input
             type="checkbox"
             name="highsodium"
             checked={highChecked.highsodium}
             onChange={handleHighCheckboxChange}
           />
           High Sodium
         </div>
         <div class="checkbox">
           <input
             type="checkbox"
             name="highfat"
             checked={highChecked.highfat}
             onChange={handleHighCheckboxChange}
           />
           High Fat
         </div>
         <div class="checkbox">
           <input
             type="checkbox"
             name="highcarbs"
             checked={highChecked.highcarbs}
             onChange={handleHighCheckboxChange}
           />
           High Carbs
         </div>
         </div>
         <div class="checkbox-row3">
         <div class="checkbox">
           <input
             type="checkbox"
             name="lowpotassium"
             checked={highChecked.lowpotassium}
             onChange={handleHighCheckboxChange}
           />
           Low Potassium
         </div>
         <div class="checkbox">
           <input
             type="checkbox"
             name="lowsodium"
             checked={highChecked.lowsodium}
             onChange={handleHighCheckboxChange}
           />
           Low Sodium
         </div>
         <div class="checkbox">
           <input
             type="checkbox"
             name="lowfat"
             checked={highChecked.lowfat}
             onChange={handleHighCheckboxChange}
           />
           Low Fat
         </div>
         <div class="checkbox">
           <input
             type="checkbox"
             name="lowcarbs"
             checked={highChecked.lowcarbs}
             onChange={handleHighCheckboxChange}
           />
           Low Carbs
         </div>
         </div>
         <button type="submit">Submit</button>
        {data.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
         </div>
         </form>
  );
}
