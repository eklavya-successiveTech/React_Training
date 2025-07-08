"use client"
import { useCallback, useState } from "react";

export default function Parent(){
  const[count, setCount] =  useState(0);

  const increment = useCallback(()=>{
    setCount(count+1);
  },[count]);

  const reset = useCallback(()=>{
    setCount(0);
  },[]);

  return(
    <div>
      <Child 
      count = {count}
      increment = {increment}
      reset = {reset}/>
    </div>
  )
}

function Child({count, increment, reset}){
  return(
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment the count</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}