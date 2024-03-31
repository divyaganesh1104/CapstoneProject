import React, { useEffect, useState } from 'react'
import "./dashboard.css"
import { Link, useNavigate, useParams } from 'react-router-dom';
const dashboard = () => {
  const labelArr= ["Registered Event Title",
  "Salutation",
  "Name",
  "Email ID",
  "Phone Number",
  "Designation",
  "Department",
  "Institute",
  "Mode of Event"]
    const [registerData,setRegisterData] = useState()
    const setRegisterArr = []
    const [manageBtnData,setManageBtnData]=useState()
    const params = useParams();
    const params_name = params.reg_name
    const [Condata,setConData]=useState();
    const titleArr = []
    const [entireData, setEntireData]=useState();
    const PopUPArr=[]
    const [profileClick, setProfileClick]=useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
      if(!localStorage.getItem("username")){
        navigate("/CapstoneProject/login/dashboard")
      }   
        fetch("http://localhost:2000/eventRegister/get")
      .then((res) =>res.json())
      .then((data)=>{
        data.map((e)=>{
            if(e.name==params_name){
              PopUPArr.push(e)
              setEntireData(PopUPArr)
              titleArr.push(e.registered_event_title)
              setConData(titleArr)
             
              
            }})
    })
    fetch("http://localhost:2000/eventBrowse")
      .then((res) =>res.json())
      .then((data)=>{
        data.map((e)=>{
          Condata.map((f)=>{
            if(e.event_title==f){
              setRegisterArr.push(e)
              setRegisterData(setRegisterArr)
            }
          })
            })
      }
    )
})
const body = document.getElementById("back-dash")
const pop= document.getElementById("pop")
const profile=(e)=>{
  console.log(e,"sdf")
  if(!profileClick){
  setProfileClick(true);
  setManageBtnData(e)
  body.classList.add("back_black")
  pop.classList.add("active")
  }
}
const close_btn = ()=>{
  body.classList.remove("back_black")
  pop.classList.remove("active")
  setProfileClick(false)
}
const ProfileHtml=()=>{
  return (<>
  <div className='reg_board'>
<h1 style={{fontSize:"16px",fontWeight:"600"}}>Application details</h1>
    <div className='reg_border'>
      {!entireData?(<></>):(<>
      {entireData.map((er)=>{
        if(er.registered_event_title==manageBtnData){
          return(<> <div>
        <p>{labelArr[0]} </p>
        <h5>{er.registered_event_title}</h5>
      </div>
      <div>
        <p>{labelArr[1]}</p>
        <h5>{er.people_title}</h5>
      </div>
      <div>
        <p>{labelArr[2]}</p>
        <h5>{er.name}</h5>
      </div>
      <div>
        <p>{labelArr[3]}</p>
        <h5>{er.email}</h5>
      </div>
      <div>
        <p>{labelArr[4]}</p>
        <h5>{er.number}</h5>
      </div>
      <div>
        <p>{labelArr[5]}</p>
        <h5>{er.designation}</h5>
      </div>
      <div>
        <p>{labelArr[6]} </p>
        <h5>{er.department}</h5>
      </div>
      <div>
        <p>{labelArr[7]}</p>
        <h5>{er.institute}</h5>
      </div>
      <div>
        <p>{labelArr[8]}</p>
        <h5>{er.mode}</h5>
      </div>
          </>)
        }
      })}
       
</>)} 
    </div>

</div>
  </>)
}
  return (
    <div className='back-dash' >
    <div className='container-lg w-75 dashboard-body' id="back-dash">
        <h1>Registered Events</h1>
        {!registerData?(<><h1></h1></>):(<>
        {registerData.map((rd)=>{
          return  (<><div className='dash'>
              <div><i class="fa-regular fa-calendar-check"></i> <span>{rd.date}</span></div>
                <Link className='link_cls' to={`/CapstoneProject/browseEvent/${rd.event_title}`} target='_blank'>{rd.event_title}</Link>
                <div><i class="fa-solid fa-location-arrow"  style={{backgroundColor:"transparent"}}></i> <span>{rd.location}</span></div>
                <div><i class="fa-solid fa-user-group" style={{fontSize:"12px",backgroundColor:"transparent"}}></i> {rd.available} People have registered</div> 
                <button className='link_cls_btn' onClick={(profilePopUP)=>profile(rd.event_title)}>View and Manage Details</button>
        </div>  </>)
        })}
        
             
                </>)}
    </div>
    <div id='pop'> {!profileClick?(<></>):( <ProfileHtml/>)}     <button onClick={close_btn} className='link_cls1_btn'>Close</button></div>
    </div>
  )
}

export default dashboard