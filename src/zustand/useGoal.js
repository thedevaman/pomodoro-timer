import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useGoal = create(persist(
    (set)=>({
       goals:[],
       setGoal:(payload)=>set((state)=>({
           goals:[...state.goals,payload]
       }))
}),{name:'goal'}
)
)