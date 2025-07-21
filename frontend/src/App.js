import Layout from './components/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import {Login} from './pages/Login';
import {Register} from './pages/Register';
import React, { useState } from 'react';


function App() {
  const [userData, setUserData] = useState(localStorage.getItem(null));
  return (
     <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout userData={userData} setUserData={setUserData} />}>
            <Route index="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login userData={userData} setUserData={setUserData}/>} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<h1>Error 404 Page not found !!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
