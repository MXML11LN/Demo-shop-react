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

const Header = () =>{
  return(
    <>
      <h1>helo world</h1>
    </>
  )
}
const Content = () =>{
  return(
    <>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, numquam non? Officiis ex dicta explicabo suscipit. Tempora quisquam, quidem nesciunt tenetur minus excepturi consequatur nobis, esse eaque nemo ratione sit?</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, numquam non? Officiis ex dicta explicabo suscipit. Tempora quisquam, quidem nesciunt tenetur minus excepturi consequatur nobis, esse eaque nemo ratione sit?</p>
    </>
  )
}

function App() {
  return(
<>

<Header/>
<Content/>

</>

  )
}


ReactDom.render(<App/>,document.getElementById("root"))