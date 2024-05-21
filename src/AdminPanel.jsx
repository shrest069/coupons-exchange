import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import Home from './pages/Home/Home'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarAdmin from './components/NavbarAdmin/NavbarAdmin'

const AdminPanel = () => {
  return (
    <div className='app-admin-panel'>
      <ToastContainer/>
      <NavbarAdmin/>
      <hr />
      <div className="admin-panel-app-content">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}/>
          <Route path="/list" element={<List/>}/>
          <Route path="/orders" element={<Orders/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default AdminPanel
