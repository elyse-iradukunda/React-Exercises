import React, { useReducer } from 'react';


    const reducer =(state,action)=>{
        if( action == "increment") return state + 1;
        if(action =="decrement") return state -1;
        return state
    }

function Counter() {

    const  [count,dispatch] = useReducer(reducer,0);
 
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={()=> dispatch("increment")}>Increment</button>
      <button onClick={()=> dispatch("decrement")}>Decrement</button>
    </div>
  );
}

export default Counter;
