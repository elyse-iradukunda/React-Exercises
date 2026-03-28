import { useEffect, useState } from "react"

export default function FetchLogic(){
    
     const [users,setUser] = useState([]);
     useEffect(()=>{
         try {
              fetch("https://jsonplaceholder.typicode.com/users").then(data=> data.json()).then(data => setUser(data));
         } catch (error) {
            con;sole.log("Error happened",error);
         }
        
     })

    return(
     
        <div>
            {
                users.map((elm,i)=>{
                  return  <li key={i}>The ID is:{elm.id} and the name is: {elm.name}</li>
                })
            }
        </div>

     
    )

}