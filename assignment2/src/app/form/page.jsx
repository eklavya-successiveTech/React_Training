"use client";
import { useState } from "react";

const PersonForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  return (
    <form>
      <label>
        First name:
        <input type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/>
      </label>
      <label>
        Last name:
        <input type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)}/>
      </label>
      <label>
        Age:
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
      </label>
    </form>
  );
};
export default PersonForm;
