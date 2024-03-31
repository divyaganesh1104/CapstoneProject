import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './signUp.css'

const signUp = () => {
  const histry = useNavigate()
  const params = useParams()
  const status = params.sign
    const [formData, setFormData]=useState({name:"",email:"",phone:"",password:""})
    const on_submit=(e)=>{
      e.preventDefault()
      if(!formData){
        alert("fill everything")
      }
      else{
        localStorage.setItem("username",formData.name)
        try{
          const fetchCreateApi = fetch("http://localhost:2000/eventSignup/create",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(formData)
          }).then((data)=>data.json())
          .then((d)=>console.log(d))
          .catch(()=>console.log("error in catch"))
        }
        catch(e){
          console.log("Error in forntend",e)
        }
        if(status=="nor"){
          console.log(status)
            histry("/CapstoneProject/")
            window.location.reload()
        }
        else{
          histry(`/CapstoneProject/RegisterEvent/${status}`)
            window.location.reload()
        }
      }
       
        console.log("the userName",formData)
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
  <div className='signup_body'>
    <form onSubmit={on_submit} className="container-lg w-50 bg-white bg-transparent" id='signup_form'>
        <h2 className='text-center'>Sign Up Form</h2>
  <div className="form-row">
    <div className="form-group">
      <label for="name">Name</label>
      <input type="text" value={formData.name} className="form-control" name="name" placeholder="Enter your Name" onChange={handleData}/>
    </div>
    <div className="form-group mt-4">
      <label for="email">Email</label>
      <input type="email" value={formData.email} className="form-control" name="email" placeholder="Enter Email ID" onChange={handleData}/>
    </div>
    <div className="form-group mt-4">
      <label for="phone">Phone</label>
      <input type="tel" value={formData.phone} className="form-control" name="phone" placeholder="Enter Phone Number" onChange={handleData}/>
    </div>
    <div className="form-group mt-4">
      <label for="password">Password</label>
      <input type="password" value={formData.password} className="form-control" name="password" placeholder="Enter the Password" onChange={handleData}/>
    </div>
 
  </div>
  <button type="submit" className="btn btn-primary mt-4">Sign in</button>
</form>
</div>
    </>
  )
}

export default signUp