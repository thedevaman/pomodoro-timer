import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useGoal = create(persist(
    (set)=>({
       goals:[],
       setGoal:(payload)=>set((state)=>({
           goals:[...state.goals,payload]
       })),
       updateProgress:(id)=>set((state)=>({
        goals:state.goals.map((item)=>{
          if(item.id === id)
          {
            return {
                ...item,
                progress:item.progress+1
            }
          }else{
            return item
          }
        })
       })
    )
}),{name:'goal'}
)
)