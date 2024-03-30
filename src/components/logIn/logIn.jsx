import React, { useEffect, useState } from 'react'
import "./login.css"
import {toast} from 'react-toastify'
import { useParams, useNavigate, Link } from 'react-router-dom'
const logIn = () => {
  const histry = useNavigate()
    const params = useParams()
    const status = params.log
    const [formData, setFormData]=useState({name:"",password:""})
    const [signupData,setSignupData]=useState()
    const  [error,setError]=useState(false)

    useEffect(()=>{

      fetch("http://localhost:2000/eventSignup/get")
      .then((res) =>res.json())
      .then((data)=>{
        setSignupData(data)
        })
      
  })
  useEffect(()=>{
    if(error){
      toast.error("Invalid Username or Password")
    }
  },[error])
    const on_submit=(e)=>{
        e.preventDefault()
        if((!formData.password) | (!formData.password )){
          alert("fill all data")
        }
        else{
          signupData.map((s)=>{
            if(status=="eventCreateLogin")
            {
              if((formData.name=="Divya G") & (formData.password=="Divya11.")){
                sessionStorage.setItem("admin","Divya G")
                histry("/createEvent")
                toast.info("Admin Authentication Successfull")
              }
              else{
                setError(true)
              }
            }
            else if((s.name==formData.name) & (s.password==formData.password)){
              localStorage.setItem("username",formData.name)
              console.log(s.name,formData.name)
              if(status=="nor"){
                
                  histry("/")
                  window.location.reload()
              }
              else if(status=="dashboard"){
                
                histry(`/dashboard/${localStorage.getItem("username")}`)
                window.location.reload()
            }
              else{
                histry(`/RegisterEvent/${status}`)
                  window.location.reload()
              }
            }
            else{
              setError(true)
            }
          })
        }
    }
    function handleData(e){
        const {name,value}=e.target
        console.log("changed")
        setFormData({
            ...formData,
            [name]:value})
        
    }
  return (
    <>
   <div className='log_in_body'>
    
    <form onSubmit={on_submit} className="container-lg w-50 bg-white bg-transparent" id='login_form'>
        <h2 className='text-center'>Login Form</h2>
  <div className="form-row">
    <div className="form-group">
      <label for="name">Name</label>
      <input type="text" value={formData.name} className="form-control" name="name" placeholder="Enter your Name" onChange={handleData}/>
    </div>
    <div className="form-group mt-4">
      <label for="password">Password</label>
      <input type="password" value={formData.password} className="form-control" name="password" placeholder="Enter the Password" onChange={handleData}/>
    </div>
 
  </div>
  <button type="submit" className="btn btn-primary mt-4">Login</button>
<Link to={`/signUp/${status}`}>Dont have an account?</Link>
</form>
</div>
    </>
  )
}

export default logIn