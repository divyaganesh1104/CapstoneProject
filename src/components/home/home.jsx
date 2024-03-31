import React, { useEffect } from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <>
    <div style={{position:'relative'}} className='image-container'>
        <img className='home-img'  src="https://th.bing.com/th/id/OIP.zsK_QcHEXwVg3HsHlbq9FQHaE7?rs=1&pid=ImgDetMain" alt="" />
        <h1 style={{color:'white',position:'absolute',top:"35%",left:"33%"}}>Educational Events Portal</h1>
        <p style={{color:'white',position:'absolute',top:"45%",left:"2%",right:"2%",fontSize:"23px"}} className='text-center'>Explore seminars, workshops, conferences, and more for your educational journey</p>
        <Link style={{position:'absolute',top:"55%",left:"45%"}}  className="btn btn-primary" to="/CapstoneProject/events">Explore Now</Link>
    </div>
    </>
  )
}

export default home