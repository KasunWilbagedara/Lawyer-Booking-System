
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Lawyers from './pages/Lawyers';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import Verify from './pages/Verify';
import { assets } from './assets/assets';

const App = () => {
  return (
    <>
      <ToastContainer />
       <Routes>
        <Route
          path="/"
          element={
            <Layout background={assets.bg}>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout >
              <Contact />
            </Layout>
          }
        />
        <Route path="/lawyers" element={<Layout><Lawyers /></Layout>} />
        <Route path="/lawyers/:speciality" element={<Layout><Lawyers /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/appointment/:lawId" element={<Layout><Appointment /></Layout>} />
        <Route path="/my-appointments" element={<Layout><MyAppointments /></Layout>} />
        <Route path="/my-profile" element={<Layout><MyProfile /></Layout>} />
        <Route path="/verify" element={<Layout><Verify /></Layout>} />
      </Routes>
    </>
  );
};

export default App;
