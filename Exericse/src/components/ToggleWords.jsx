import { useState } from "react";





function ToggleWords(props) {

 const [current,setCurrent]=useState(true);
function handleWords(){
 return current === true ? "show":"hide"
}

    return (
        <div>
             <p>{handleWords()}</p>
             <button type="button" onClick={()=>{setCurrent(false)}}>Change</button>
             <button type="button" onClick={()=>{setCurrent(true)}}>Change</button>
        </div>
    );
}

export default ToggleWords;