import { useState } from "react";

export default function App() {

  const [names, setNames] = useState(["Alice", "Bob", "Charlie"]);

  function handleDelete(index){

     setNames(names.filter((_,elm)=> elm != index));
  }

  function handleAddName(e){

    e.preventDefault()
      
       const newName = e.target.AddName.value;
      setNames([...names,newName]);
  }

  return (
    <div>
      <ul>
        {names.map((name, i) => (
          <li key={i}>
            {name}
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
   <form  onSubmit={handleAddName}>
       <input type="text"  placeholder="add New name"  name="AddName" />
       <button>Add Name</button>
   </form>
    </div>
  );
}