'use client'
import { useState } from "react";

const Counter = () =>{
    const[count, setCount] = useState(0);

    const increment = () =>{
        setCount(count+1);
    }
    const decrement = () =>{
        setCount(count-1);
    }
    return(
        <div>
            <p>Question: 4.Create a functional component named Counter that displays a count and two buttons: "Increment" and "Decrement".
                Implement event handlers for the "Increment" and "Decrement" buttons to increase and decrease the count.
                Display the updated count on the screen.</p>
            <p>      </p>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
export default Counter;