import './index.css'
import FormLg from '../FormLg';
import Charts from '../Charts';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

const TasksMeddleComppo = () => {
  return (
    <div className="middle-bg-container">
       <div className='display-percent-con'>
           <Charts/>
       </div>
       <div className="display-form-con">
          <FormLg/>
       </div>

    </div>
  )
};

export default TasksMeddleComppo;