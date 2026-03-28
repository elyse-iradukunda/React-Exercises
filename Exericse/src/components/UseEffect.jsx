import { useEffect } from "react"

 const UseThatEff =()=>{
 useEffect(()=>{
    console.log("component has rendered!");
 },[5])
    
return(
    <h1>Hello it happened.</h1>
)

 }
 export default UseThatEff