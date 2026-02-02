import React from 'react'
import Header from '../other/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumber from '../other/TaskListNumber'

const EmployeeDashboard = (props) => {

  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber/>
        <TaskList />
    </div>
  )
}

export default EmployeeDashboard
