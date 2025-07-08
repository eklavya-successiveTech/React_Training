"use client"
import { useState } from "react";

const Rng = () =>{
    const [number, setNumber] = useState(0);
    const numberGenerator = ()=>{
        let randomNumber = Math.floor(Math.random()*100);
        setNumber(randomNumber);
    }
    return(
        <div>
            <h1>{number}</h1>
            <button onClick={numberGenerator}>RNG</button>
        </div>
    )
}
export default Rng;