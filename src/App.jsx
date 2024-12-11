import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor,setbgColor] = useState("white")

  const changeColor=(color)=>{
    setbgColor(color)
  }


  return (
    
      <div  style={{width: '100vw', height:'100vh', display:'flex', alignItems: 'center', justifyContent:'center', textAlign:'center',  flexDirection:'column', backgroundColor: bgColor}} className='d-flex justify-content-center align-item-center '>
        <h3 className='fs-10' >
          Click To Change Colors!!!
        </h3>
       <div className='btns'style={{marginLeft:'20px'}}>
         <button id='green' className='btn green' onClick={()=>{changeColor("green")}}>Green</button>
         <button id='blue' className='btn blue' onClick={()=>{changeColor("blue")}}>Blue</button>
         <button id='yellow' className='btn yellow'onClick={()=>{changeColor("yellow")}}>yellow</button>
         <button id='red' className='btn red' onClick={()=>{changeColor("red")}}>Red</button>
       </div>
        </div>
    
  )
}

export default App