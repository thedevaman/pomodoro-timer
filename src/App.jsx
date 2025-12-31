import { Plus } from "lucide-react";
import React from "react";


const App = ()=>{

  return(
  <div className="bg-gray-200 min-h-screen">
   <div className="w-9/12 mx-auto bg-white">
    <div className="bg-[linear-gradient(167deg,_#667eea,_#764ba2)] text-center py-16">
      <h1 className="text-4xl font-bold mb-4 text-white">Pomodoro Timer</h1>
      <p  className="text-gray-600 text-lg text-white">
        Stay focused and boost Productivity with Pomodoro Timer
      </p>
      <button className="shadow-lg active:scale-80 duration-300 bg-gradient-to-r from-rose-600 via-red-500 to-rose-600 text-white px-12 py-3 rounded flex mx-auto mt-5">
        <Plus className="mr-1"/>  
        Add Task
      </button>
    </div>
    <div className="p-8 space-y-12">
     {
      Array(20).fill(0).map((item,index)=>(
        <div key={index} className="border border-gray-300 p-8 rounded-lg">
           <div>
            <h1 className="text-xl font-semibold">Complete Testing</h1>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quas velit quia consequuntur aliquid accusamus ut exercitationem fugit quod similique quo illo voluptatibus vero odit, sapiente cumque culpa natus nisi!</p>
            <div className="mt-4">
              <h1 className="text-3xl font-bold">00:10 - 30:00 Min</h1>
               <button className="shadow-lg active:scale-80 duration-300 bg-gradient-to-r from-rose-600 via-red-500 to-rose-600 text-white px-12 py-3 rounded flex mx-auto mt-5">
                <Plus className="mr-1"/>  
                Add Task
              </button>
            </div>
           </div>
        </div>
      ))
     }
    </div>
   </div>
  </div>
  )

}

export default App