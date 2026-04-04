import { useReducer } from "react";

const reducer = (state,action)=>{

    if(action === "increment") return state +1;
    if(action ==="decrement")  return state -1;
    return state
}


export default function Counter(){
  
    const [count,dispatch] = useReducer(reducer,0)

     return (

        <>
          <p>{count}</p>
          <button onClick={()=> dispatch("increment")}>Increment</button>
          <button onClick={()=> dispatch("decrement")}>decrement</button>
        </>
     )

}

// step 1: import useReducer() and create reducer
// step 2: define my reducer  with increment and decrement withing reducer function 
// step 3: pass defined reducer into useReducer Hook with initial state of 0
// step 4: create dispath function with those reducers that I have made.