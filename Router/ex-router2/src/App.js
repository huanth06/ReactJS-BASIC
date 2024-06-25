import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Employee from './components/Employee';
import EmployeeDetail from './components/EmployeeDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Login />}></Route>
        <Route path='/employee' element={<Employee />}></Route>
        <Route path='/employee/employee-detail/:id' element={<EmployeeDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
