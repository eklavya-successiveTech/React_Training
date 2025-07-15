"use client"
import { useState } from "react"

function ControlledFunc (){
    const[value, setValue] = useState("")
    return(
        <div>
            <input value={value} onChange={(e)=> setValue(e.target.value)}/>
        </div>
    )
}
export default ControlledFunc;