

import './index.css'
import Sidebar from '../Sidebar'
import  TasksMeddleComppo from '../TasksMeddleComppo'
import TasksDisplay from '../TasksDisplay'

function Dashboard() {

  return (
    <div className='dashboard-bg-con'>
        <Sidebar/>
        <TasksMeddleComppo/>
        <TasksDisplay/>
    </div>
  )
}

export default Dashboard

