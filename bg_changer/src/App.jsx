import { useState } from "react"
function App() {
  const [color,setColor]=useState("olive")
  return (
    <>  
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
          <div className="fixed flex flex-wrap
    justify-center bottom-16 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl">
        <button className="outline-none px-4 rounded-full text-white"
        onClick={()=>setColor("red")}
        style={{backgroundColor:"red"}}>RED</button>
        <button className="outline-none px-4 rounded-full text-white"
        onClick={()=>setColor("black")}
        style={{backgroundColor:"black"}}>BLACK</button>
        <button className="outline-none px-4 rounded-full text-white"
        onClick={()=>setColor("green")}
        style={{backgroundColor:"green"}}>GREEN</button>
        <button className="outline-none px-4 rounded-full text-white"
        onClick={()=>setColor("blue")}
        style={{backgroundColor:"blue"}}>BLUE</button>
        <button className="outline-none px-4 rounded-full text-white"
        onClick={()=>setColor("pink")}
        style={{backgroundColor:"pink"}}>PINK</button>
      </div>
    </div>
    </div>

     </>
  )
}

export default App
