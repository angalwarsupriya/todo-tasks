import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <Router> 
      <Routes> 
        <Route path="/tasks" element={<Dashboard />} /> 
        <Route path="/" element={<Navigate to="/tasks" replace />} />
      </Routes> 
    </Router>
  )
}

export default App