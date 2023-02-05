
import React,{useState} from "react"
import Button from "./CounterButtons";
import { CounterBody } from "./CounterWrapper";

function Counter(){
    const [count,setCount]= useState(0)
    
    let decrementCount = ()=>{
        setCount(count-1)
    };
    let incrementCount = ()=>{
        setCount(count+1)
    };
    let resetCount = ()=>{
        setCount(0)
    };
    return(
        <CounterBody>
            <h2>Count:{count}</h2>
            <div className="buttons">
                <Button title={"Increment"} action={incrementCount} />
                <Button title={"Reset"} action={resetCount} />
                <Button title={"Decrement"} action={decrementCount} />
            </div>
        </CounterBody>
    )
}

export default Counter