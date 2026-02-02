import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData , setUserData] = useContext(AuthContext)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
        <div className='bg-[#B5B1B2] mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h4 className='text-lg font-medium w-1/5'>Active</h4>
            <h4 className='text-lg font-medium w-1/5'>Completed</h4>
            <h4 className='text-lg font-medium w-1/5'>Failed</h4>
        </div>
        <div className=' overflow-auto'>
            {userData.map(function(elem,idx){
            return <div key ={idx}className='border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskStats.new}</h3>
            <h4 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskStats.active}</h4>
            <h4 className='text-lg font-medium w-1/5 text-white'>{elem.taskStats.completed}</h4>
            <h4 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskStats.failed}</h4>
        </div>
        })}
        </div>
    </div>
  )
}

export default AllTask