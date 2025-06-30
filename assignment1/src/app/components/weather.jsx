'use client'
import { useEffect, useState } from "react";

const Weather = ({temperature}) =>{
    const [message, setMessage] = useState("");
    
    useEffect(()=>{

        if(temperature>25){
            setMessage("It's sunny today!");
        }
        else if(temperature<10){
            setMessage("It's cold today!");
        }
    },[temperature])
    return(
        <div>
            <h1>{message}</h1>
        </div>
    )
}

export default Weather;