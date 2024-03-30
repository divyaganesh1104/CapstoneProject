import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './registerEvent.css'

const registerEvent = () => {
    const params = useParams();
const path_data=params.event_title
const navigate = useNavigate()
const [FormData, setFormData]=useState({registered_event_title:path_data,people_title:"",name:localStorage.getItem("username"),email:"",number:"",designation:"",department:"",institute:"",mode:""})
useEffect(()=>{
  if(!localStorage.getItem("username")){
          navigate("/login/nor")
  }
})

const handleData = (e)=>{
  const {name,value} = e.target
  console.log(name,value)
  setFormData({...FormData,[name]:value})
}
const FormBtnData = (e)=>{
  e.preventDefault()

  try{
         
        
    const fetchCreateApi = fetch("http://localhost:2000/eventRegister/create",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(FormData)
    }).then((data)=>data.json())
    .then((d)=>{
      console.log(d)
      fetch(`http://localhost:2000/event/${path_data}`,{
        method:"PATCH",
        headers:{"content-type":"application/json"}
      }).then((data)=>data.json())
      .then((d)=>console.log(d))
      .catch(()=>console.log("error in catch"))
    })
    .catch(()=>console.log("error in catch"))
  }
  catch(e){
    console.log("Error in forntend",e)
  }
  navigate(`/dashboard/${FormData.name}`)
  console.log(FormData)
}
console.log(path_data)
  return (
    <>
    <div className='bg-light pt-3'>
   <div className='container-lg registerEventDiv bg-white'>
        <h2 className='text-center' style={{color:"blue"}}>{path_data} Registration</h2>
        <form className="  row w-100 bg-white bg-transparent p-3">
        <div className='col-6'>
          <div className="">
            <label for="people_title">Salutation</label>
              <select className="form-select form-control" id="people_title" name="people_title" onChange={handleData}>
                <option selected>Choose Salutation...</option>
                <option value="Ms">Ms</option>
                <option value="Mrs">Mrs</option>
                <option value="Mr">Mr</option>
                <option value="Dr">Dr</option>
              </select>
         </div>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" value={localStorage.getItem("username")} disabled name="name" id="name" placeholder="Enter your Name" onChange={handleData}/>
          </div>
          <div className="form-group">
            <label for="email">Email ID</label>
            <input type="email" className="form-control" name="email" id="email"  placeholder="Enter your Email ID" onChange={handleData}/>
        </div>
        <div className="form-group">
          <label for="number">Phone Number</label>
          <input type="text" className="form-control" name="number"  id="number"  placeholder="Enter your Phone Number" onChange={handleData}/>
        </div>
    </div>
    <div className='col-6'>
        <div className="">
          <label for="designation">Designation</label>
          <select className="form-select form-control" id="designation" name="designation" onChange={handleData}>
          <option selected>Choose your designation...</option>
          <option value="Student">Student</option>
          <option value="Research Scholor">Research Scholor</option>
          <option value="Faculty">Faculty</option>
          <option value="ndustry Delegate">Industry Delegate</option>
          </select>
        </div>
        <div className="form-group">
          <label for="department">Department</label>
          <input type="text" className="form-control" name="department" placeholder="Enter your Department" onChange={handleData}/>
        </div>
        <div className="form-group">
          <label for="institute">Organization</label>
          <input type="text" className="form-control" name="institute" placeholder="Enter your Organization" onChange={handleData}/>
        </div>
        <div className='row'>
          <label style={{marginBottom:"7px"}}>Event Mode</label>
            <div class="form-check col-6">
                  <input class="form-check-input" style={{marginLeft:"-8px",marginRight:"5px"}} type="radio" name="mode" id="gridRadios1" value="Online" onChange={handleData}/>
                  <span class="form-check-label" for="gridRadios1">
                     Online Mode
                  </span>
            </div>
            <div class="form-check col-6">
                  <input class="form-check-input" type="radio" name="mode" id="gridRadios2" value="Offline" onChange={handleData}/>
                  <span class="form-check-label" for="gridRadios2">
                    Offline Mode
                  </span>
            </div>
          </div>
    </div>
    <button onClick={FormBtnData} className='btn btn-primary'>Submit</button>
  </form>
  </div>
  </div>
    </>
  )
}

export default registerEvent