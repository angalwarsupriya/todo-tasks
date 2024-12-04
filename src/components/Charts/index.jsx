import React from 'react'
import './index.css'
import { useSpring, animated } from 'react-spring';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'; 
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function Charts() {
    const AnimatedCircularProgressbar = animated(CircularProgressbar);
    const allTasksList= useSelector((store) => store.tasksList)
    
    const props = useSpring({ value: 20, from: { value: 0 }, config: { duration: 1000 }, });

    console.log(allTasksList)
    /* PERCENT TASKS */

    const tasks = allTasksList.tasks
    const totalTasks = allTasksList.tasks.length;
    const completedTasks = tasks.filter((task) => task.taskStatus === 'COMPLEATED').length; 
    const overdueTasks = tasks.filter((task) => task.taskStatus !== 'COMPLEATED' && new Date(task.dueDate) < new Date()).length; 
    const inProgressTasks = tasks.filter((task) => task.taskStatus === 'IN PROGRESS').length; 
    const todoTasks = tasks.filter((task) => task.taskStatus === 'TO DO').length;

    const progressObjsList = [
      {
        tashStatusName:'completed',
        percentageNum: completedTasks === 0 ? 0 : (completedTasks / totalTasks) * 100
      },
      {
      tashStatusName: 'overdue',
      percentageNum: overdueTasks === 0 ? 0 : (overdueTasks / totalTasks) * 100
     },
     {
      tashStatusName: 'inProgress',
      percentageNum: inProgressTasks === 0 ? 0 : (inProgressTasks / totalTasks) * 100
    },
    {
      tashStatusName:'todo',
      percentageNum: todoTasks === 0 ? 0: (todoTasks / totalTasks) * 100
    }
  ]
  console.log(progressObjsList)
    /*-------------------------*/


    const countTasksByDay = (tasks) => {
        const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        const taskCounts = days.map((day) => ({
          name:day,
          uv: tasks.filter((task) => new Date(task.dueDate).getDay() === days.indexOf(day)).length,
        }));
        return taskCounts;
      };
       
      
    const data = countTasksByDay(allTasksList.tasks);

    const CustomTick = (props) => {
        const { x, y, payload } = props; 
        return ( 
        <g transform={`translate(${x},${y})`}> 
        <text x={0} y={0} dy={16} 
        textAnchor="end" 
        fill="white" 
        fontSize="7"> {payload.value} 
        </text> 
        </g>); 
        };

  return (
    <>
    <div className='barchart-con'>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={90} height={40} data={data} margin={{ top: 0, right: 5, left: 5, bottom: 0, }}>
              <Bar dataKey="uv" fill="#8884d8" barSize={30}/>
              <XAxis dataKey="name" tick={<CustomTick />}/> 
            </BarChart>
        </ResponsiveContainer>
    </div>


    <div className='percent-cart-con'>
    <div className='progress-row'>
    <div className="glowingCircle" > 
      <AnimatedCircularProgressbar className='bar'
      value={progressObjsList[0].percentageNum} text={`${Math.round(progressObjsList[0].percentageNum)}%`} 
      styles={buildStyles({ pathColor: `rgba(32, 200, 58, 90)`, 
      textColor: '#fff', trailColor: '#d6d6d6', backgroundColor: 'red', })} /> 
    </div>
    <p className='progress-name'>{progressObjsList[0].tashStatusName}</p>
    </div>

    <div className='progress-row'>
    <div className="glowingCircle" > 
    <AnimatedCircularProgressbar className='bar'
      value={progressObjsList[3].percentageNum} text={`${Math.round(progressObjsList[3].percentageNum)}%`} 
      styles={buildStyles({ pathColor: `rgba(200, 23, 58, 90)`, 
      textColor: '#fff'})} /> 
    </div>
    <p className='progress-name'>{progressObjsList[3].tashStatusName}</p>
    </div>

    <div className='progress-row'>
    <div className="glowingCircle"> 
      <AnimatedCircularProgressbar className='bar'
      value={progressObjsList[2].percentageNum} text={`${Math.round(progressObjsList[2].percentageNum)}%`} 
      styles={buildStyles({ pathColor: `rgba(18, 123, 154, 70)`, 
      textColor: '#fff'})} /> 
    </div>
    <p className='progress-name'>{progressObjsList[2].tashStatusName}</p>
    </div>

    <div className='progress-row'>
    <div className="glowingCircle"> 
      <AnimatedCircularProgressbar className='bar'
      value={progressObjsList[1].percentageNum} text={`${Math.round(progressObjsList[1].percentageNum)}%`} 
      styles={buildStyles({ textColor: '#fff', pathColor: `rgba(65, 83, 0)` })} /> 
    </div>
    <p className='progress-name'>{progressObjsList[1].tashStatusName}</p>
    </div>    
    </div>
    </>
  )
}

export default Charts

/*
<ul className='percente-ul-con'>
        {progressObjsList.map((eachProgress)=>(
          <li className='percentahebg-box-con' key={eachProgress.tashStatusName}>
              <p className='li-name'>{eachProgress.tashStatusName}</p>
              <div className='percentage-row-bg-con'>
                <div className='percent-top-con' style={{width:eachProgress.percentageNum}}></div>
              </div>
          </li>
        ))}
      </ul>*/