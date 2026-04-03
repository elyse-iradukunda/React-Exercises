import { use, useState } from "react"
export default function ToggleCards(){
   
    const [limit,setLimit]= useState(4);


    const cardsData = [
  { id: 1, title: 'Card 1', description: 'This is the description for Card 1.' },
  { id: 2, title: 'Card 2', description: 'This is the description for Card 2.' },
  { id: 3, title: 'Card 3', description: 'This is the description for Card 3.' },
  { id: 4, title: 'Card 4', description: 'This is the description for Card 4.' },
  { id: 5, title: 'Card 5', description: 'This is the description for Card 5.' },
  { id: 6, title: 'Card 6', description: 'This is the description for Card 6.' },
  { id: 7, title: 'Card 7', description: 'This is the description for Card 7.' },
  { id: 8, title: 'Card 8', description: 'This is the description for Card 8.' },
]




    return (
        <>
         <h1>cards</h1>
          <ul className="cards">
          {cardsData.slice(0,limit).map((element)=>{
              return(
                 <li key={element.id} className="card">
                    <div>
                     <h1>cardId: {element.id}</h1>    
                     <h2>Title: {element.title}</h2>    
                     <h3>Description: {element.description}</h3>      
                    </div>
                 </li>
              ) 
          })

          }

          <button onClick={()=> setLimit(cardsData.length)} >Show more</button>
          <button  onClick={()=> setLimit(4)} >Show less</button>
         </ul> 
        </>
    )
}