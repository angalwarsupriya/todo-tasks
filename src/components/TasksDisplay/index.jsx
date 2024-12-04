
import React from 'react'
import './index.css'
import CategoriesRow from '../CategoriesRow'
import TaskList from '../TaskList'
import { useState } from 'react';
import {useSelector} from 'react-redux'

import { FcSearch } from "react-icons/fc";


function TasksDisplay() {
  const [searchText, changeSearchText] = useState('')

  const onSearch = (event) =>{
    changeSearchText(event.target.value)
 }

 /* all filters here */

 const allTasks = useSelector((state) => state.tasksList.tasks); 
 const filter = useSelector((state) => state.tasksList.filter);
 const categoryStatus = useSelector((stote) => stote.tasksList.category)
 

 /* filters function */
 /* filter tasks based on the filter tasks */

 const filterList = allTasks.filter((eachTask)=>{
  if (filter === 'TO DO'){
    return eachTask.taskStatus === 'TO DO'
  }
  if(filter === 'IN PROGRESS'){
    return eachTask.taskStatus === 'IN PROGRESS'
  }
  if(filter === 'COMPLEATED'){
    return eachTask.taskStatus === 'COMPLEATED'
  }
  if(filter === 'OVER DUE'){
    return new Date(eachTask.dueDate) < new Date() && eachTask.taskStatus !== 'COMPLEATED';
  }
  return eachTask
 })
  
 /* filters tasks based on the category status */


 const categoryFilterTasks = filterList.filter((each)=>{
  if (categoryStatus === 'All'){
    return true
  }
  else {
    return each.category===categoryStatus
  }
})

  /* filter tasks based on the search text */
  console.log('cate', categoryFilterTasks)
  
  const searchFilterList = categoryFilterTasks.filter((eachFilter)=>{
    return eachFilter.title.includes(searchText.toUpperCase())
  })
  const isEmpty = searchFilterList.length === 0
  return (
    <div className='tasks-compo-con'>
      <div className="category-bg-con">
          <CategoriesRow/>
      </div>

      <div className="display-bg-con">         
        <div className="search-bar-con">
          <div className='searchbar-con'>
            <input type='search' className='search-bar' onChange={onSearch}/>
            <div className='search-icon-con'>
              <FcSearch style={{fontSize:'25px'}}/>
            </div>
          </div>
        </div>

        <div className='tasks-display-con'>
          {isEmpty ?
           (<div className='empty-view'>
            <img alt='empty-view' style={{width:'60%', height:'70%'}} src='images/9276414img1.png' />
            <h3 className='empty-title'>There is no todo, that you are searching for.</h3>
           </div>)
          :
            <ul className='tasks-ul'>
              {searchFilterList.map(task => ( 
                <TaskList key={task.id} task={task} /> 
            ))}
         </ul>
          }
        </div>
      </div>

    </div>
  )
}

export default TasksDisplay
