import React, { useState } from "react";
import Diet from "./Diet";
import Recepis from "./Recepies";
import BMI from "./BMI";
import Daily from "./Daily";

export default function Home() {
  const [selectedPage, setSelectedPage] = useState("");
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
          <button style={{ margin: "10px" }} onClick={() => setSelectedPage("Diet")}>Find Your Diet</button>
          <button style={{ margin: "10px" }} onClick={() => setSelectedPage("Recepies")}>Find Recepis</button>
          <button style={{ margin: "10px" }} onClick={() => setSelectedPage("BMI")}>BMI Calculator</button> 
          <button  style={{ margin: "10px" }} onClick={() => setSelectedPage("Daily")}>Dalily Calorie Intake</button>
          <button style={{ margin: "10px" }} onClick={() => setSelectedPage("")}>Close</button>
      </div>
      {selectedPage === "Diet" && <Diet />}
      {selectedPage === "Recepies" && <Recepis />}
      {selectedPage === "BMI" && <BMI />}
      {selectedPage === "Daily" && <Daily />}
      
    </>
  );
}
