import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TaskIdPage from './components/TaskIdPage';
function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/tasks" element={<Dashboard />} /> 
        <Route path="/" element={<Navigate to="/tasks" replace />} />
        <Route path="/tasks/:id" component={TaskIdPage} />
      </Routes> 
    </Router>
  )
}

export default App