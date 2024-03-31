
import './App.css'
import SignUp from './components/signUp/signUp.jsx'
import Login from './components/logIn/logIn.jsx'
import Error from './components/notFound/notFound.jsx'
import NavBar from './components/navBar/navBar.jsx'
import CreateEvent from './components/createEvent/createEvent.jsx'
import BrowseEvent from './components/browseEvent/browseEvent.jsx'
import BrowseEventDetail from './components/browseEvent/browseEventDetail.jsx'
import RegisterEvent from './components/registerEvent/registerEvent.jsx'
import Home from './components/home/home.jsx'
import Dashboard from './components/dashboard/dashboard.jsx'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/CapstoneProject/signUp/:sign" element={<SignUp/>} />
        <Route path="/CapstoneProject/logIn/:log" element={<Login />}/>
        <Route path="/CapstoneProject/browseEvent/:event_name" element={<BrowseEvent />}/>
        <Route path="/CapstoneProject/RegisterEvent/:event_title" element={<RegisterEvent />}/>
        <Route path="/CapstoneProject/events" element={<BrowseEventDetail />}/>
        <Route path="/CapstoneProject/createEvent" element={<CreateEvent />}/>
        <Route path="/CapstoneProject/dashboard/:reg_name" element={<Dashboard />}/>
        <Route path="/CapstoneProject/" element={<Home />}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
