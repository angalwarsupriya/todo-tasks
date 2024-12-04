import './index.css'


import { useState } from "react";

import { useDispatch,useSelector } from 'react-redux';
import tasksSlice from '../../redux/tasksSlice';

function EditForm(props) {

  const editDetails = props
  const {toggleEditFormFun} = editDetails

  const [edittitle, seteditTitle] = useState('');
  const [editdescription, setDescription] = useState('');
  const [editcategory, changeeditCategoryStatus] = useState('')
  const [editdueDate, seteditDueDate] = useState('');


  const dispatch = useDispatch()
  const action = tasksSlice.actions
  const allTasksList= useSelector((store) => store.tasksList)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(action.editTask({ id: editDetails.editid , title:edittitle.toUpperCase(), description:editdescription.toLowerCase(), category:editcategory ,dueDate: editdueDate, taskStatus:'TO DO'}));
    seteditTitle('');
    setDescription('');
    seteditDueDate('');
    toggleEditFormFun()
  };


  return (
    <div className='edit-form-con'>
       <form onSubmit={handleSubmit}>
            <div className='label-input-con'>
                <label className='label' htmlFor='edittitle'>Title</label>
                <input
                    type="text"
                    id='edittitle'
                    placeholder="aedittitle here"
                    value={edittitle}
                    onChange={(e) => seteditTitle(e.target.value)}
                    className='input' />
            </div>
  
            <div className='label-input-con'>
                <label className='label' htmlFor='editdescription'>Description</label>
                <input
                    type="text"
                    placeholder="editdescription here"
                    id='editdescription'
                    value={editdescription}
                    onChange={(e) => setDescription(e.target.value)}
                    className='input' />
            </div>

            <div className='label-input-con'>
                <label className='label' htmlFor='editcategory'>Category</label>
                <select className='input input-cate' value={editcategory} onChange={(e)=> changeeditCategoryStatus(e.target.value) }>
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
                    value={editdueDate}
                    onChange={(e) => seteditDueDate(e.target.value)}
                    className='input'/>
            </div>
  
           <button type="submit" className='add-task-btn'>Add Task</button>
        </form>
  </div>
  )
}

export default EditForm