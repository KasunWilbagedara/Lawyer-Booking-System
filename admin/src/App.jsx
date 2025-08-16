import React, { useContext } from 'react'
import { LawyerContext } from './context/LawyerContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddLawyer from './pages/Admin/AddLawyer';
import LawyersList from './pages/Admin/LawyersList';
import Login from './pages/Login';
import LawyerAppointments from './pages/Lawyer/LawyerAppointments';
import LawyerDashboard from './pages/Lawyer/LawyerDashboard';
import LawyerProfile from './pages/Lawyer/LawyerProfile';

const App = () => {

  const { dToken } = useContext(LawyerContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-lawyer' element={<AddLawyer />} />
          <Route path='/lawyer-list' element={<LawyersList />} />
          <Route path='/lawyer-dashboard' element={<LawyerDashboard />} />
          <Route path='/lawyer-appointments' element={<LawyerAppointments />} />
          <Route path='/lawyer-profile' element={<LawyerProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App