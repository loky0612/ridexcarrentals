import './App.css';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import { Toaster } from "react-hot-toast";
import axios from 'axios';
import Signup from './pages/SignUp';

axios.defaults.baseURL = 'https://ridexserver.onrender.com';
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            border: "2px solid white",
            padding: "20px",
            fontSize: "15px",
          },
        }}
      />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
