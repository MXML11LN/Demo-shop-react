import React,{ useState } from "react"



export const Testimonials = () => {

    const [count, setCount] = useState(1)
    const [color, setColor] = useState("green");

    return(
        <>
            <h2 className="page-title">Testimonials</h2>
            <p>Color:{color}</p>
            <div>
                <button onClick={()=> setColor("red")}>Change Color</button>
            </div>
            <button onClick={( )=> setCount(count-1)}>-</button>
            <input type="text" value={count}/>
            <button onClick={( )=> setCount(count+1)}>+</button>
        </>
    ) 
}