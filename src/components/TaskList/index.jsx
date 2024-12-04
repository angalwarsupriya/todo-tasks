import './index.css'

import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import EditForm from '../EditForm'
import 'reactjs-popup/dist/index.css';

import { AiTwotoneDelete } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";

import { GrInProgress } from "react-icons/gr";
import { MdDone } from "react-icons/md";

import { useDispatch,useSelector } from 'react-redux';
import tasksSlice from '../../redux/tasksSlice';


function TaskList(props) {


  const [isEditFormOpen, toggleEditForm] = useState(false)


  const {task} = props

  const taskId = task.id
  const onDelete = ()=>{
    dispatch(action.deleteTask(task.id))
  }

  const onToggle = ()=>{
    dispatch(action.toggleComplete(task.id))
  }

  const toggleEditFormFun = ()=>{
    toggleEditForm((preve)=>!preve)
  }

  const dispatch = useDispatch()
  const action = tasksSlice.actions
  

  const displayBasedOnTaskStatus = () => {
    console.log(task.taskStatus)
        switch (task.taskStatus){
        case 'TO DO':
          return (
            <button className='completion-btn'  onClick={onToggle}>
              <img alt='todo' className='status-icon' src='images/target_3214721.png'/>
            </button>
            )
        case 'IN PROGRESS':
          return (<button className='completion-btn'   onClick={onToggle}>
            <img alt='in progress' className='status-icon' src='images/progress_17020002.png'/>
          </button>)
        case 'COMPLEATED':
          return (<button className='completion-btn' onClick={onToggle}>
          <img alt='compleated' className='status-icon' src='images/check_5610944.png'/>
          </button>)
        default :
          null
      }

  }

  return (
    <li className='task-list-con'> 
        {displayBasedOnTaskStatus()}   
      <div className='title-des-con'>
        <div className='title-row'>
          <h3 className='todo-title'>{task.title}</h3>
          <p className='date-p'>{task.dueDate}</p>
        </div>
        <p className='todo-des'>{task.description}</p>
      </div>
      <div className="icons-con">

        
        <button className='icons-btn' onClick={toggleEditFormFun}><MdOutlineEdit className='icon'/>  </button>
          <div className='edit-popup-con' style={{display : isEditFormOpen ? '' : 'none'}}>
              <h5 className='edit-task-hea'>Edit Task</h5>
              <EditForm  editid={taskId} toggleEditFormFun={toggleEditFormFun}/>
          </div>
     

        <Popup modal 
        contentStyle={{width:'25%', height:"30%", borderRadius:'10px',padding:'0px'}}
     
        trigger={
          <button className='icons-btn'>
            <AiTwotoneDelete className='icon'/>
          </button>
        } position="center">
          {close => (
          <div className='delete-popup-con'>
            <p className='popup-dialog'>Are Sure Want to Delete?</p>
            <div className='popup-btns-con'>
              <button className='cancel-btn' onClick={() => close()}>Cancel</button>
              <button className='sure-btn' onClick={onDelete}>Delete</button>
            </div>
              
          </div>
          )}
        </Popup>
        
       
      </div>
    </li>
  )
}

export default TaskList