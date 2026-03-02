import Props from "./Props";

export default function TestProps(props){

  return(
    <div>
      <h1> {props.names}</h1>
      <h1>{props.age}</h1>
    </div>
  )
}