import { useEffect, useState } from "react";

 export default function TransferNames(){
   
     const [initialNames,setInitialNames ]= useState(['Alice', 'Bob', 'Charlie', 'David', 'Eve']);
     const [transferedNames, setTransferedNames] = useState([]);

  useEffect(()=>{
    
        setTimeout(()=>{
         if(initialNames.length ==0) return;
         const firstName = initialNames[0];
         setInitialNames(initialNames.slice(1))
         setTransferedNames((prev)=>[firstName,...prev])
          
        
        },2000)
      

  },[initialNames])

    return(
        <>
        
         <div>
             <h1> Initial names names</h1>

             <ul>
               { initialNames.map((name,index)=>{

              return <li key={index}>{name}</li>
               })

               }

              </ul> 
         </div>

         <div>
             <h1> Transfered names</h1>
              
               { transferedNames.length < 1 &&  <h1>wait two seconds</h1>
               }


                <ul>
               { transferedNames.map((name,index)=>{

              return <li key={index}>{name}</li>
               })

               }

              </ul> 
         </div>
        </>
    )
 }