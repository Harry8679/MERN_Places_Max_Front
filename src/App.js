import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Users from './user/pages/Users';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Users />} exact />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
