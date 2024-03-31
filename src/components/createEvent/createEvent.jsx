import React, { useEffect, useState } from 'react'
import './createEvent.css'
import { Link, useNavigate } from 'react-router-dom'
import {Bounce, toast} from 'react-toastify'

const createEventList = [
    {id:"event_title",
    label_name:"Event Title",
    type:"text",
    place:"Enter the Event Title"},
    {id:"description",
    label_name:"Description",
    type:"textarea",
    place:"Enter the Description"},
    {id:"date",
    label_name:"Date and Time",
    type:"datetime-local",
    place:"Enter the Date"},
    {id:"location",
    label_name:"Location",
    type:"text",
    place:"Event Place"},
    {id:"capacity",
    label_name:"Capacity",
    type:"number",
    place:"Enter the Capacity"},
    {id:"dead_line",
    label_name:"Event Deadline",
    type:"date",
    place:"Enter the Event deadline"},
    {id:"special_requirment",
    label_name:"Special Requirement",
    type:"textarea",
    place:"Enter the Special Requirement"},
    {id:"email",
    label_name:"Event Enquiry Email Address",
    type:"email",
    place:"Enter the email ID"},
    {id:"organizer",
    label_name:"Organizer",
    type:"text",
    place:"Event Organized by"}
    
]
function CreateEventPlan(props){
    const d=props.hookData
    const df=props.id
    return (
    <>
     <div className="form-group" >
    <label for={props.id}>{props.label_name}</label>
      <input className="form-control" value={d.df} name={props.id} type={props.type}  id={props.id} placeholder={props.place} onChange={props.handleFunction}/>
    </div>
    </>
       
    )
    
}
function CreateEventTextAreaPlan(props){
    const d=props.hookData
    const df=props.id
    return (
    <>
    <div className="form-group">
    <label for={props.id}>{props.label_name}</label><br></br>
    <textarea className='form-control' value={d.df} name={props.id} id={props.id} cols="60" rows="3" placeholder='Type anything' onChange={props.handleFunction}></textarea>
    </div>
     
    </>
    )
}
const createEvent = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    const navBar = document.getElementById("navBar")
    navBar.style.display="none"
    if(!sessionStorage.getItem("admin")){
            navigate("/CapstoneProject/login/eventCreateLogin")
    }
   
  })
    const [forData, setFormData] = useState({category:"",event_title:"",description:"",date:"",location:"",capacity:"",dead_line:"",special_requirment:"",email:"",organizer:"",available:0})
const eventCreationData = (e)=>{
    e.preventDefault()
    if(!forData.category=="" & !forData.event_title=="" & !forData.description=="" & !forData.date=="" & !forData.location=="" & !forData.capacity=="" & !forData.dead_line=="" & !forData.special_requirment=="" & !forData.email=="" & !forData.organizer=="")
    {
      try{
    const fetchCreateApi = fetch("http://localhost:2000/event/create",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(forData)
    }).then((data)=>{
      data.json()
      toast.success("Event Successfully Created " , {
        position: "top-center",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        });
    })
    .then((d)=>console.log(d))
    .catch(()=>console.log("error in catch"))
  }
  catch(e){
    console.log("Error in forntend",e)
  }
    }
  else {
    toast.error("Some data missing")
  }
    console.log(forData)
}
const setHandleData = (e)=>{
    const {name,value}=e.target
    console.log(e.target.value)
    setFormData({
        ...forData,
        [name]:value
    })
}
    
  return (
    <>
    <div className='createEventDiv'>
        <h2 className='text-center'>Event Creation Form</h2>
    <form className="container-lg w-50 bg-white bg-transparen p-3" onSubmit={eventCreationData}>
    <div className="form-row">
    <label for="category">Category</label>
    <select className="form-select form-control" id="category" name="category" value={forData.category} onChange={setHandleData}>
      <option selected>Choose Event Category...</option>
      <option value="Conference">Conference</option>
      <option value="Seminar">Seminar</option>
      <option value="Workshop">WorkShops</option>
    </select>
  </div>
        {createEventList.map((e)=>(
            <>
           {e.type === "textarea" ? (
            <CreateEventTextAreaPlan handleFunction={setHandleData} name={e.id} id={e.id} label_name={e.label_name} hookData={forData}/>
        ) : (
            <CreateEventPlan id={e.id} hookData={forData} name={e.id} label_name={e.label_name} handleFunction={setHandleData} type={e.type} place={e.place}/>
        )}
             
             </>
           
        ))}
 
  

  <div class="col-12">
    <button type="submit" class="btn ">Submit</button>
  </div>
</form>
</div>
<div id="pop"></div>
    </>
  )
}

export default createEvent