import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AcceptTask = ({ data }) => {
  const [userData, setUserData] = useContext(AuthContext)

  const handleUpdateStatus = (status) => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    if (!loggedInUser) return;

    const updatedUsers = userData.map(user => {
        if (user.firstName === loggedInUser.data.firstName) {
            
            // NEW: Update the specific task's status within the user's task array
            const updatedTasks = user.tasks.map(task => {
                if (task.title === data.title) {
                    return {
                        ...task,
                        active: false,
                        newTask: false,
                        completed: status === 'completed',
                        failed: status === 'failed'
                    }
                }
                return task
            })

            return {
                ...user,
                tasks: updatedTasks, // Inject the updated task list
                taskStats: {
                    ...user.taskStats,
                    completed: status === 'completed' ? user.taskStats.completed + 1 : user.taskStats.completed,
                    failed: status === 'failed' ? user.taskStats.failed + 1 : user.taskStats.failed,
                    active: user.taskStats.active - 1
                }
            }
        }
        return user
    })

    setUserData(updatedUsers)
}

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
      <div className='flex justify-between items-center'>
        <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
        <h4 className='text-sm'>{data.date}</h4>
      </div>
      <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
      <p className='text-sm mt-2'>{data.description}</p>
      
      <div className='flex justify-between mt-6'>
        <button 
          onClick={() => handleUpdateStatus('completed')}
          className='bg-green-500 rounded font-medium py-1 px-2 text-xs cursor-pointer'
        >
          Mark as Completed
        </button>
        <button 
          onClick={() => handleUpdateStatus('failed')}
          className='bg-red-500 rounded font-medium py-1 px-2 text-xs cursor-pointer'
        >
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask