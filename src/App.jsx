import { Button, Divider, Form, Input, InputNumber, message, Modal } from "antd";
import { useForm } from "antd/es/form/Form";
import { AlarmCheck, Calendar, Plus } from "lucide-react";
import React, { useState } from "react";
import { useGoal } from "./zustand/useGoal";
import moment from "moment";
import { nanoid } from "nanoid";


const App = ()=>{
const [open, setOpen] = useState(false)
const [form] = useForm()
const {goals, setGoal} = useGoal()
const [progresstimer,setProgress] = useState(0)

const createGoal = (value) =>{
  value.progress = 0
  value.date = new Date()
  value.id = nanoid()
setGoal(value)
message.success("Goal Created!")
handleClose()
}

const handleClose = ()=>{
  setOpen(false)
  form.resetFields()
}

const trackProgress = (e)=>{
  setInterval(()=>{
   setProgress(progresstimer+1)
  },1000)
// console.log(e.title="huhj")
}

  return(
  <div className="bg-gray-200 min-h-screen">
   <div className="w-9/12 mx-auto bg-white">
    <div className="bg-[linear-gradient(167deg,_#667eea,_#764ba2)] text-center py-16">
      <h1 className="text-4xl font-bold mb-4 text-white">Pomodoro Timer</h1>
      <p  className="text-gray-600 text-lg text-white">
        Stay focused and boost Productivity with Pomodoro Timer
      </p>
      <button onClick={()=>setOpen(true)} className="shadow-lg active:scale-80 duration-300 bg-gradient-to-r from-rose-600 via-red-500 to-rose-600 text-white px-12 py-3 rounded flex mx-auto mt-5">
        <Plus className="mr-1"/>  
        Add Task
      </button>
    </div>
    <div className="p-8 space-y-12">
     {
      goals.map((item,index)=>(
        <div key={index} className="border border-gray-200 p-8 rounded-lg shadow hover:shadow-lg">
           <div>
            <h1 className="text-xl font-semibold">{item.title}</h1>
            <p className="text-gray-600">{item.description}</p>
            <label className="text-sm text-gray-500 mt-2 flex items-center">
              <Calendar className="w-4 h-4"/>
              {moment(item.date).format('DD MMM YYYY hh:mm A')}</label>
            <div className="mt-4 flex items-center gap-8">
              <h1 className="text-3xl font-bold">{item.progress} - {item.timer} Min</h1>
               <button onClick={()=>trackProgress(item)} className="shadow-lg active:scale-80 duration-300 bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-600 text-white px-8 py-3 rounded flex">
                <AlarmCheck className="mr-1"/>  
                Start
              </button>
            </div>
           </div>
        </div>
      ))
     }
    </div>
   </div>
   <Modal open={open} footer={null} onCancel={handleClose} title="Create New Goal">
    <Divider />
     <Form form={form} layout="vertical" onFinish={createGoal}>
      <Form.Item rules={[{required:true}]} label="Goal Title" name='title'>
        <Input 
        size='large'
        placeholder="Enter Goal Title"
        />
      </Form.Item>
       <Form.Item rules={[{required:true}]} label="Description" name='description'>
        <Input.TextArea 
        size='large'
        rows={5}
        placeholder="Description"
        />
      </Form.Item>
       <Form.Item rules={[{required:true,type:"number"}]} label="Timer" name='timer'>
        <InputNumber 
        size='large'
        className="!w-full"
        placeholder="Timer Iminute"
        />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" size="large" type="primary">Submit</Button>
      </Form.Item>
     </Form>
   </Modal>
  </div>
  )

}

export default App