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
            <h1>card</h1> 
             <ul className="cards">
                   
                  { cardsData.slice(0,limit).map((elm,i)=>{
                     return(
                     <div key={i}>
                        <li key={i}>{elm.id}</li>
                        <li key={i}>{elm.title}</li>
                        <li key={i}>{elm.description}</li>
                      </div>
                     )
                  })
                  }
             </ul>
             <button onClick={()=> setLimit(4)}>show less</button>
             <button onClick={()=> setLimit(cardsData.length)} >show more</button>
        </>
    )
}