"use client"
import { useState } from "react";

const CounterStep = () =>{
    const[count, setCount] = useState(0);
    const[step, setStep] = useState(1);

    const stepUpdate = (num)=>{
        setStep(num);
    }
    const increment = () =>{
        setCount(count + Number(step));
    }
    const decrement = () =>{
        setCount(count - Number(step));
    }
    return(
        <div>
            <p>{count}</p>
            <input type="number" value={step} onChange={(e)=> stepUpdate(e.target.value)}/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}
export default CounterStep;