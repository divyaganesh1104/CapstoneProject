import React, { useEffect, useState } from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'
const navBar = () => {
  const [signinData, setSigninData]=useState()
  const [userData, setUserData]=useState()
  const [isLoggedIn,setLoggedIn]=useState()
  const [profileClick, setProfileClick]=useState(false)
  const handleLogout=()=>{
    localStorage.removeItem("username")
    setLoggedIn(false)
    window.location.reload()
  }
  useEffect(()=>{
    const username = localStorage.getItem("username")
    if(username){
      setLoggedIn(true)
      setUserData(username);
      fetch("http://localhost:2000/eventSignup/get")
      .then((res) =>res.json())
      .then((data)=>{
        data.map((e)=>{
            if(e.name==username){
              setSigninData(e)
             
              
            }})
    })
    }
    else {
      setLoggedIn(false)
    }
  })
  const profilePopUP=(e)=>{
    if(!profileClick){
    setProfileClick(true)
    e.target.classList.add("added_style")
    }
    else{
      setProfileClick(false)
      e.target.classList.remove("added_style")
    }
  }
  const ProfileHtml=()=>{
    return (<>{!signinData?(<></>):(<><div className='profile-pop row' >
      <div className='col-4'>
      <img src="https://images.squarespace-cdn.com/content/v1/58c959fcf5e2312e4c5803fd/1690897313005-B4B6OC379KOFURI2FJFT/39013212.jpg" className='img-profile' alt="" />
      </div>
      <div className='col-7 sida'>
        <li>{signinData.name}</li>
        <li>{signinData.email}</li>
        <li>{signinData.phone}</li>
        <li><Link  className="register-link" to={`/dashboard/${userData}`}>Registered Events</Link></li>
      </div>
    <li  className='btn-profile' style={{textAlign:"center",marginLeft:"30px"}}>
    <i class="fa-solid fa-right-from-bracket"></i>
        <button  style={{border:"none",backgroundColor:"transparent"}} onClick={handleLogout}>Logout</button>
      </li>
      </div></>)}
    
    </>)
  }
    
  return (
    <>
    
    <nav id="navBar" className="navbar navbar-expand-lg">


  <div>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item bor">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item bor">
        <Link to="/createEvent" target='_blank' className="nav-link">Create Event</Link>
      </li>
      <li className="nav-item bor">
        <Link to="/events" className="nav-link">Events</Link>
      </li>
      {!isLoggedIn? (<> <li className="nav-item right bor" style={{marginLeft:"750px"}}>
        <Link className="nav-link" to="/signUp/nor">signup</Link>
      </li>
      <li className="nav-item right bor">
        <Link className="nav-link" to="/logIn/nor">login</Link>
      </li></>):(<>
        <li className="nav-item right" style={{position:"absolute",right:"200px",marginTop:"7px"}}>
        Welcome, <strong>{userData}</strong>
      </li>
      <li className="nav-item right bor user" style={{position:"absolute",right:"80px",marginTop:"2px"}} onClick={profilePopUP}>
        <li><i style={{fontSize:"23px",paddingLeft:"20px"}} class="fa-solid fa-user"></i></li>
      </li>
      
      {!profileClick?(<></>):( <ProfileHtml/>)}
      </>)}
   
    </ul>
   
  </div>
</nav>
</>
  )
}

export default navBar