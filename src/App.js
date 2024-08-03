import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './user/pages/Users';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Users />} exact />
      </Routes>
    </Router>
  );
}

export default App;
