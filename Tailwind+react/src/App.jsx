// import { useState } from "react";
import Card from "./components/card"
function App() {
  let Names=[{
    username:'A',
    place:'A'
    
  },{
    username:'B',
    place:'B'
    
  }]
  
  return (
    <>
    <h1 className="bg-red-100">
      Hello world!
      {Names.map((name,index)=>(<Card key={index} username={name.username} place={name.place}/>))}
    </h1>
    </> )
}

export default App

