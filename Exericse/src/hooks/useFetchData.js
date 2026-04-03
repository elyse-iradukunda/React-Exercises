import { useState,useEffect } from "react";

export default function useFetch(api){
    
   const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
   
      async function getData(){

        try {
           setLoading(true);

            const response= await fetch(api)
            if(!response.ok) throw new Error("failed to fetch")
             
             const finalData = await response.json();
             
             setData(finalData);
              
             
        } catch (error) {
          
            setError(error);
            setLoading(false)
        } finally{

          setLoading(false);
        }
      }
    
    
return {data,error,loading}

}