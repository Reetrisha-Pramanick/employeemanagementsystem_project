import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = () => {
    // 1. Grab the global state from context
    const [userData] = useContext(AuthContext)
    
    // 2. Identify the logged-in user from localStorage
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'))
    
    // 3. Find the live data for this specific employee
    const currentUser = userData?.find(e => e.firstName === loggedInUser.data.firstName)

    // Fallback if data is not yet available
    if (!currentUser) return null;

    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {/* 4. Use currentUser.tasks instead of props data */}
            {currentUser.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }
                return null;
            })}
        </div>
    )
}

export default TaskList