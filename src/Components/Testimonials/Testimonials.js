import React,{ useState } from "react"



export const Testimonials = () => {

    const [count, setCount] = useState(1)
    const [color, setColor] = useState("green");

    const toggleColor = () => {
        setColor((value) => {
            return(
                value ==="red" ? "green" : "red"
            )
        })
    }

    return(
        <>
            <h2 className="page-title">Testimonials</h2>
            <p>Color:{color}</p>
            <div>
                <button onClick={()=> toggleColor()}>Change Color</button>
            </div>
            <button onClick={( )=> setCount(count-1)}>-</button>
            <input type="text" value={count}/>
            <button onClick={( )=> setCount(count+1)}>+</button>
        </>
    ) 
}