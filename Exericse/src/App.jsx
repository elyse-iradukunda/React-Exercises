// import TestProps from "./components/TestProps";
import  users from "/public/userData"
import useCounter from "./components/useCounter"
import User  from "./components/User";
import { useState } from "react";
import UseThatEff from "./components/UseEffect";
import FetchLogic from "./components/FetchLogic";
import Counter from "./components/useReducer";
import Post from "./components/Post";
import ToggleButtons from "./components/ToggleButtons";
import TransferNames from "./components/TransferNames";
import ToggleCards from "./components/ToggleCards";



import  { Suspense, lazy } from "react";
import ToggleWords from "./components/ToggleWords";

const HeavyPage = lazy(() => import("../src/heavy"));



function App() {
  const [isAdmin ,setAdmin]=useState(false);
  const {counter, increment, decrement} = useCounter();

 const isvalid=false;
const handleType=()=>{

  setAdmin((p)=>!p)
  alert ("UserType changed well");
}

  return (
    <>

<ToggleWords/>


  <ToggleCards/>

    <TransferNames/>

  <ToggleButtons/>




           <div>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <UseThatEff/>
      <FetchLogic/>
      

       
     { isAdmin && isvalid&&
      users.map((e,i)=>{
        return (
          <div key={i}>
            <User  name={e.name} age={e.age}></User>
          </div>
        )
      })
     }
    </div>
    <button onClick={handleType}>ChangeType</button>


    <Counter/>

   <Post/>





    </>
  )
}

export default App
