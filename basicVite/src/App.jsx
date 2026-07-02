import { useState } from 'react'
import './App.css'
import Chai from './Chai'

function App() {
  let [counter, ashuCounter] = useState(13)
  //let counter = 13

  const addValue = () =>{
    console.log("clicked", counter);
    //counter+=1
    ashuCounter(counter+1)
  }
  const removeValue = () =>{
    console.log("clicked", counter);
    if(counter===0){
      return(
        console.log("stoped")
      )
    }
    ashuCounter(counter-1)
  }

  return (
    <>
    <section id="center">
    <h1>yogendra</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={removeValue}>remove value</button>
      </section>

      <div className="ticks"></div>
      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
