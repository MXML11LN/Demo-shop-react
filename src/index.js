import React from "react"
import ReactDom from "react-dom"

//const h1 = React.createElement("h1",{
//  id:"test"
//},"Hello world");

//jsx
//const h1 = <h1 id="test 2">Hello world 2</h1>
//const ul= <ul>
//  <li>list item 1 </li>
//  <li>list item 2 </li>
//</ul>

//const app =<div>
//  {h1}
//  {ul}
//</div>
function App() {
  return(
    <>
      <h1>Helo world</h1>
      <p>lorem dkjfsjkdfgscm kbkdjfbaksjjbfkjb kjfaksjbf</p> 
    </>
  )
}
   

ReactDom.render(<App/>,document.getElementById("root"))