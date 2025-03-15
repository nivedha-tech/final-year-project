import './App.css';
import './index.css';
import React, { useEffect, useContext, useState } from 'react';
import { Context } from './index';
import axios from 'axios';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Components/Home/home';
import Nav from './Components/Nav/nav';
import About from './Components/About/about';
import MainContact from './Components/MainContact/maincontact';
import JobDetails from './Components/Job/JobDetails';
import MyJobs from './Components/Job/MyJobs';
import PostJob from './Components/Admin/PostJob';
import { Toaster } from 'react-hot-toast';
import Jobs from './Components/Job/Jobs';
import MyApplications from './Components/Applications/MyApplications';
import NotFound from './Components/NotFound/NotFound';
import Applications from './Components/Applications/Applications';
import Admin from './Components/Admin/admin';
import AdminNav from './Components/Admin/AdminNav';
import MainHome from './Components/Main_home/home';
import Managejobs from './Components/Admin/Managejobs';
import Dashboard from './Components/Dashboard/dashboard';
import FirstPage from './Components/FirstPage/firstpage';
import SecondPage from './Components/SecondPage/secondpage';
import ThirdPage from './Components/ThirdPage/thirdpage';
import FourthPage from './Components/FourthPage/fourthpage';
import FifthPage from './Components/FifthPage/fifthpage';
import FinalPage from './Components/FinalPage/finalpage';
import EditProfile from './Components/EditProfile/EditProfile';

const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4000/api/v1/user/getuser',
          {
            withCredentials: true,
          }
        );
        if (response?.data?.user) {
          setUser(response.data.user);
          setIsAuthorized(true);
        }
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  const [savedData, setSavedData] = useState({});
  const isAdminPage = location.pathname.startsWith('/admin') || location.pathname.startsWith('/job/post') || location.pathname.startsWith('/job/manage');

  return (
    <div className="App">
      {/*Nav component*/}
      {location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/reg' && location.pathname !== '/dashboard' && location.pathname !== '/firstpage' && location.pathname !== '/secondpage' && location.pathname !== '/thirdpage' && location.pathname !== '/fourthpage' && location.pathname !== '/fifthpage' && location.pathname !== '/finalpage' && (
        isAdminPage ? <AdminNav /> : <Nav />
      )}
      <Routes>
        {/*Job finder pages*/}
        <Route path="/reg" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<MainContact />} />
        <Route path="/about" element={<About />} />
        <Route path="/job/getall" element={<Jobs />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/application/:id" element={<Applications />} />
        <Route path="/applications/me" element={<MyApplications />} />
        <Route path="/job/me" element={<MyJobs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/job/post" element={<PostJob />} />
        <Route path="/job/manage" element={<Managejobs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/jobs" element={<Jobs />} />
        {/*Resume Builder pages*/}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<MainHome />} />
        <Route path="/firstpage" element={<FirstPage savedData={savedData} setSavedData={setSavedData} />} />
        <Route path="/secondpage" element={<SecondPage savedData={savedData} setSavedData={setSavedData} />} />
        <Route path="/thirdpage" element={<ThirdPage savedData={savedData} setSavedData={setSavedData} />} />
        <Route path="/fourthpage" element={<FourthPage savedData={savedData} setSavedData={setSavedData} />} />
        <Route path="/fifthpage" element={<FifthPage savedData={savedData} setSavedData={setSavedData} />} />
        <Route path="/finalpage" element={<FinalPage savedData={savedData} setSavedData={setSavedData} />} />
        <Route path="/profile" element={<EditProfile savedData={savedData} setSavedData={setSavedData} />} />

      </Routes>
      <Toaster />
    </div>
  );
};


export default App;