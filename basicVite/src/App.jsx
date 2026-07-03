import { useState } from 'react'
import './App.css'
import Chai from './Chai'
import Card1 from './components/Cards'

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
  let myObj = {
    username: "hitesh",
    age : 21
  }
  let newArry = [1,2,3]

  return (
    <>  
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card1 username="Yogendra" btnText="Click me"/>
    <Card1 username="ashu" btnText="Visit me"/>
    </>
  )
}

export default App
