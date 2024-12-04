
import './index.css'

import React from 'react';
import { HiOutlinePlus } from "react-icons/hi";
import { LuListTodo } from "react-icons/lu";
import 'reactjs-popup/dist/index.css';
import { MdHighlightOff } from "react-icons/md";

import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import tasksSlice from '../../redux/tasksSlice'


const displayStatus = {
  all:'ALL',
  todo:'TO DO',
  compleated:'COMPLEATED',
  inProgress:'IN PROGRESS',
  overDue:'OVER DUE'
}

function Sidebar() {
  const [menuStatus, changeMenuStatus] = useState(false)

  //form
  const [popupStatus, chaPopupStatus] = useState(false)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const dispatch = useDispatch()
  const allTasksList= useSelector((store) => store.tasksList)
  const action = tasksSlice.actions

  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(action.addTask({ id:allTasksList.tasks.length+1 , title:title.toUpperCase(), description:description.toLowerCase(), dueDate, taskStatus:'TO DO'}));
    setTitle('');
    setDescription('');
    setDueDate(''); 
    toggleaddTaskPopup()
  
  };

  const toggleaddTaskPopup = ()=>{
    chaPopupStatus((preve)=> !preve)
  }
  /////////////////////
  const moveAllTasks = () =>{
     dispatch(action.setFilter(displayStatus.all))
  }

  const moveTodDoTasks =()=>{
    dispatch(action.setFilter(displayStatus.todo))
  }

  const moveInProgreesTasks = ()=>{
    dispatch(action.setFilter(displayStatus.inProgress))
  }

  const moveCompleatedTasks = ()=>{
    dispatch(action.setFilter(displayStatus.compleated))
  }
  
  const moveOverDueTasks =()=>{
    dispatch(action.setFilter(displayStatus.overDue))
  }

  // toggle menu item for filter in mobiles

  const toggleMenu = ()=>{
     changeMenuStatus((preve)=> !preve)
  }
  return (
    <>
    <div className='sidebar-bg-con'>
        <div className='profile-con'>
        <img className='profile-img' alt='profile-img' src='https://res.cloudinary.com/dfb0groak/image/upload/v1732531487/sweety_3_vzpc7u.jpg' />
        <h2 className='name'>Supriya</h2>
        </div>
        <div className='sidebar-filters-con'>
         <button className='todo-filter-btn' onClick={moveAllTasks} type='button'>All</button>
         <button className='todo-filter-btn' onClick={moveTodDoTasks} type='button'>To Do</button>
         <button className='todo-filter-btn' onClick={moveCompleatedTasks} type='button'>Compleated</button>
         <button className='todo-filter-btn' onClick={moveInProgreesTasks} type='button'>In Progress</button>
         <button className='todo-filter-btn' onClick={moveOverDueTasks} type='button'>Overdue</button>
        </div>
    </div>


    <div className='mobile-nav'>
       <button className='create-btn' onClick={toggleaddTaskPopup}>
        <HiOutlinePlus className='plus-icon'/>
      </button> 
     
      <div className='popup-form-con' style={{display: popupStatus ? '' : 'none'}}>
            <form onSubmit={handleSubmit} >
              <div className='popup-label-input-con'>
               <label className='popup-label' htmlFor='title'>
                Title
               </label>
               <input
                type="text"
                id='title'
                placeholder="add title here"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='popup-input'
                required
               />
              </div>
      
              <div className='popup-label-input-con'>
                <label className='popup-label' htmlFor='description'>Description</label>
                <input
                type="text"
                placeholder="add description here"
                id='description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='popup-input'
                required
               />
              </div>
              <div className='popup-label-input-con'>
               <label className='popup-label' htmlFor='date'>Date</label>
               <input
                type="date"
                id='date'
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className='popup-input'
                required
               />
              </div>
              <button type="submit" className='popup-add-task-btn'>Add Task</button>
              <button onClick={toggleaddTaskPopup} className='cancel-button'>Cancel</button>
            </form>
          </div>     
      <button className='menu-btn' onClick={toggleMenu}>
        {menuStatus ? <MdHighlightOff className='menu-icon'/> : <LuListTodo className='menu-icon'/>}
        
      </button>
    </div>

    <div className='menu-container' style={{display: menuStatus ? 'flex' : 'none'}}>
    <div className='sidebar-filters-con'>
         <button className='todo-filter-btn' onClick={moveAllTasks} type='button'>All</button>
         <button className='todo-filter-btn' onClick={moveTodDoTasks} type='button'>To Do</button>
         <button className='todo-filter-btn' onClick={moveCompleatedTasks} type='button'>Compleated</button>
         <button className='todo-filter-btn' onClick={moveInProgreesTasks} type='button'>In Progress</button>
         <button className='todo-filter-btn' onClick={moveOverDueTasks} type='button'>Overdue</button>
        </div>
    </div>
 </>
  )
}

export default Sidebar