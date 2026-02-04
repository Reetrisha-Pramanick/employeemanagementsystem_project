import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const TaskListNumbers = () => {
    // 1. Subscribe to the Context
    const [userData] = useContext(AuthContext)
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    const currentUser = userData?.find(e => e.firstName === loggedInUser.data.firstName)

    // Fallback if data is still loading
    if (!currentUser) return null;

    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='rounded-xl text-black w-[45%] py-6 px-9 bg-[#EFD28D]'>
                <h2 className='text-3xl font-bold'>{currentUser.taskStats.new}</h2>
                <h3 className='text-xl mt-0.5 font-medium'>New Task</h3>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-[#00AFB5]'>
                <h2 className='text-3xl font-bold'>{currentUser.taskStats.completed}</h2>
                <h3 className='text-xl mt-0.5 font-medium'>Completed Task</h3>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-[#004777]'>
                <h2 className='text-3xl text-white font-bold'>{currentUser.taskStats.active}</h2>
                <h3 className='text-xl mt-0.5 text-white font-medium'>Active Task</h3>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-[#FF7700]'>
                <h2 className='text-3xl font-bold'>{currentUser.taskStats.failed}</h2>
                <h3 className='text-xl mt-0.5 font-medium'>Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNumbers