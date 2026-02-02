import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({data}) => {
  const [userData , setUserData] = useContext(AuthContext)
  const handleAccept = () => {
        // 2. Identify the current logged-in user
        const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))

        // 3. Update the specific task for this user
        const updatedUserData = userData.map((user) => {
            if (user.firstName === loggedInUser.data.firstName) {
                const updatedTasks = user.tasks.map((task) => {
                    // Check if this is the task we clicked
                    if (task.title === data.title) {
                        return { 
                            ...task, 
                            newTask: false, // Turn off "New" status
                            active: true    // Turn on "Active" status
                        }
                    }
                    return task
                })
                return { ...user, tasks: updatedTasks }
            }
            return user
        })

        // 4. Save the updated data back to the global state
        setUserData(updatedUserData)
    }
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-emerald-400 rounded-xl'>
            <div className='flex justify-between items-center'>
            <h3 className='bg-emerald-500 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-3 text-2xl font-medium'>{data.title}</h2>
        <p className='text-sm mt-3'>{data.description}</p>
        <div className='mt-4'>
           <button 
           onClick={handleAccept}
           className='w-full bg-blue-500 cursor-pointer'>Accept Task</button>
        </div>
        </div>
  )
}

export default NewTask