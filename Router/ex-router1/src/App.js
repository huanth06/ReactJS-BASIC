import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
