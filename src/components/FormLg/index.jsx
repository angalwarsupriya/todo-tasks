import './index.css'


import { useState } from "react";


import { useDispatch,useSelector } from 'react-redux';
import tasksSlice from '../../redux/tasksSlice';



function FormLg() {


  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, changeCategoryStatus] =useState('')
  const [dueDate, setDueDate] = useState('');


  const dispatch = useDispatch()
  const action = tasksSlice.actions

  const allTasksList= useSelector((store) => store.tasksList)


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(action.addTask({ id:allTasksList.tasks.length+1 , title:title.toUpperCase(), description:description.toLowerCase(), category:category ,dueDate, taskStatus:'TO DO'}));
    setTitle('');
    setDescription('');
    setDueDate('');
  };


  return (
    <div className='form-con'>
       <form onSubmit={handleSubmit}>
            <div className='label-input-con'>
                <label className='label' htmlFor='title'>Title</label>
                <input
                    type="text"
                    id='title'
                    placeholder="add title here"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='input' />
            </div>
  
            <div className='label-input-con'>
                <label className='label' htmlFor='description'>Description</label>
                <input
                    type="text"
                    placeholder="add description here"
                    id='description'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='input'        />
            </div>

            <div className='label-input-con'>
                <label className='label' htmlFor='category'>Category</label>
                <select className='input input-cate' value={category} onChange={(e)=> changeCategoryStatus(e.target.value) }>
                    <option value='Other'>Other</option>
                    <option value='Home'>Home</option>
                    <option value='Work'>Work</option>
                    <option value='Health'>Health</option>
                    <option value='Social'>Socail</option>
                </select>   

            </div>
  
            <div className='label-input-con'>
                <label className='label' htmlFor='date'>Date</label>
                <input
                    type="date"
                    id='date'
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className='input'/>
            </div>
  
           <button type="submit" className='add-task-btn'>Add Task</button>
        </form>
  </div>
  )
}

export default FormLg