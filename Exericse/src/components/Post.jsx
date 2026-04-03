import useFetch from "../hooks/useFetchData"
export default function Post(){
  
    const {data,loading,error} = useFetch("https://jsonplaceholder.typicode.com/posts");



    return(
        <>
           
{ loading &&  <p>Loading.....</p> }
{  error &&  <p>Error.....{error.message}</p>}
           
            


     <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data && data.map((ele,index) => (
        <p key={index}>{ele.title}</p>
      ))}
    </div>



        </>
    )
 }