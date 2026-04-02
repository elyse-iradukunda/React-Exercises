import { useReducer } from "react";

const reducer = (state,action)=>{

    if(state == "increment") return state +1;
    if(state == "decrement")  return state -1;
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