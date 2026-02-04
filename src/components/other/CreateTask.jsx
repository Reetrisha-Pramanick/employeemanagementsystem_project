import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData , setUserData] = useContext(AuthContext)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')
    const submitHandler = (e) =>{
        e.preventDefault()
        const task = {
  title,
  description,
  date,
  category,
  active: false,
  newTask: true,
  failed: false,
  completed: false
}
    const updatedData = userData.map(user => {
    if (user.firstName === assignTo) {
      return {
        ...user,
        tasks: [...user.tasks, task],
        taskStats: {
          ...user.taskStats,
          new: user.taskStats.new + 1 ,
        }
      }
    }
    return user
  })
        setUserData(updatedData)
        console.log(updatedData)
        setTitle('')
        setDescription('')
        setassignTo('')
        setcategory('')
        setDate('')
        
    }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input 
                value = {title}
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text"placeholder='Make a UI Design' />
                </div>
                    <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                <input 
                value = {date}
                onChange={(e)=>{
                    setDate(e.target.value)
                }}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <select
                value = {assignTo}
                onChange={(e)=>{
                    setassignTo(e.target.value)
                }}>
                    <option value="">Select whom to assign to:</option>
                </select>
                </div>
               <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                <select 
                value = {category}
                onChange={(e)=>{
                    setcategory(e.target.value)
                }}
                className='text-sm py-2 px-3 w-4/5 rounded outline-none border border-gray-400 mb-4 bg-zinc-800 text-white focus:border-green-500'
                >
                    <option value="">Select Category</option>
                    <option value="Design">Design</option>
                    <option value="Dev">Dev</option>
                    <option value="Testing/QA">Testing/QA</option>
                    <option value="Bug Fix">Bug Fix</option>
                    <option value="Documentation">Documentation</option>
                    <option value="Research/Analysis">Research/Analysis</option>
                </select>
                </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea 
                value = {description}
                onChange={(e)=>{
                    setDescription(e.target.value)
                }}
                className="w-full h-44 text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"name="" id="" cols="30" rows="10"></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-400 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                 </div>
            </form>
        </div>
  )
}

export default CreateTask