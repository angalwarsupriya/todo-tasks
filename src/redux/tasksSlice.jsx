// src/features/tasks/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [{id:0,title:'Reading(ex)', description: 'reading books is a good habit', category:'Home', dueDate:'1-12-2025', taskStatus:'TO DO'}],
  filter: 'ALL',
  category:'All'
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,

  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    }, 
    toggleComplete: (state, action) => { 
      const taskId = action.payload; 
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      
      const status = state.tasks[taskIndex].taskStatus
      if (status === 'TO DO'){
        state.tasks[taskIndex].taskStatus = 'IN PROGRESS'
      }
      else if (status === 'IN PROGRESS'){
        state.tasks[taskIndex].taskStatus = 'COMPLEATED'
      } 
      else{
         state.tasks[taskIndex].taskStatus = 'TO DO'
      }               
    },
    editTask: (state, action) => { 
      const { id, title, description, category, dueDate, taskStatus } = action.payload; 
      const index = state.tasks.findIndex((task) => task.id === id); 
      if (index !== -1) { 
        state.tasks[index] = { 
          ...state.tasks[index], 
          title, 
          description, 
          category, 
          dueDate, 
          taskStatus }; }
    },

    deleteTask: (state, action) => { 
      state.tasks = state.tasks.filter((task) => task.id !== action.payload); 
    }, 
    setFilter: (state, action) => { 
      state.filter = action.payload; 
    },
    setCategory:(state,action)=>{
      state.category = action.payload
    }
   
}
});

export default tasksSlice
