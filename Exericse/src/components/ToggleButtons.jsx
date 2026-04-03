import { useState } from "react";

export default function ToggleButtons(){
     
    
    const [buttons,setButtons] =useState( Array(5).fill("blue"));

    const toggleColor=(index)=>{
        const allButtons = [...buttons]
       allButtons[index]= allButtons[index] === "blue"?"green":"blue"
       setButtons(allButtons)

    }

    return (
        <>  
        
        {
           buttons.map((e,i)=>{
                return(
                    <button
                    style={{backgroundColor:e}}
                    onClick={()=>toggleColor(i)}
                    >Button :{i+1}</button>
                )
           })
        }
          
        </>
    )

}