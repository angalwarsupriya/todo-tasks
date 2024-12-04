import React from 'react'
import './index.css'
import { useDispatch } from 'react-redux'

import tasksSlice from '../../redux/tasksSlice'


function CategoriesRow() {


  const dispatch = useDispatch()
  const action = tasksSlice.actions
  

  /* change category */

  const changeCategory = (cateId)=>{
    dispatch(action.setCategory(cateId))
  }

  
  return (
      <div className="categories-con">
          <div className="category-item-con">
           <button className='img-btn' onClick={() => changeCategory('Home')}>
              <img className='category-icon' alt='home' src='images/house_619153.png'/>
            </button>
           </div>
           <div className="category-item-con">
           <button className='img-btn'  onClick={() => changeCategory('Work')}>
              <img className='category-icon' alt='work' src='images/working-time_7398232.png'/>
              </button>
           </div>
           <div className="category-item-con">
              <button className='img-btn'  onClick={() => changeCategory('Health')}>
              <img className='category-icon' alt='health' src='images/care_7273434.png'/>
              </button>
           </div>
           <div className="category-item-con"  onClick={() => changeCategory('Social')}>
            <button className='img-btn'>
             <img className='category-icon' alt='social' src='images/friends_1490408.png'/>
            </button>
           </div>
           <div className="category-item-con"  onClick={() => changeCategory('All')}>
            <button className='img-btn'>
             <img className='category-icon' alt='alllist' src='images/checklist_2666505.png'/>
            </button>
           </div>
      </div>
  )
}

export default CategoriesRow