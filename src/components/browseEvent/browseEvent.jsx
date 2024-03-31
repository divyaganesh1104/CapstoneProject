import React, { useEffect, useState } from 'react'
import "./browseEvent.css"
import {Link, useParams, useNavigate} from 'react-router-dom'

const browseEvent = () => {
  const navigate = useNavigate()
  const params = useParams();
const event1 = params.event_name
  const [Condata,setConData]=useState();
  const [entireData, setEntireData]=useState();
  const [er, setEntireArrayData]=useState();
  const ConArr =[]
  useEffect(()=>{

  
      fetch("http://localhost:2000/eventBrowse")
      .then((res) =>res.json())
      .then((data)=>{
        setEntireData(data)
        data.map((e)=>{
          if(e.category==event1){
            ConArr.push(e)
            setConData(ConArr)
          }
          else if(e.event_title==event1){
            ConArr.push(e)
            setConData(ConArr)
          }
          })
        })
      
  })
  const EventBox=(e)=>{
    const targed_p_data = e.target.textContent
    console.log(e)
    entireData.map((e)=>{
      if(e.event_title==targed_p_data){
        setEntireArrayData(e)
      
        }
      }
      )
    
    }
    const path="/CapstoneProject/registerEvent"
    const registerBtn=()=>{
      const link_href=path+"/"+er.event_title
      if(localStorage.getItem("username")){
          navigate(link_href)
      }
      else{
        navigate(`/CapstoneProject/logIn/${er.event_title}`)
      }
    }
    return (

    <>
    <div className='container-lg'> 
    <div className='browseEventBody row'>
          <div className='all_event text-center col-6'>
          <div className='conference'> 
          {!Condata?(<><h1>empty</h1></>):(
            <>
                <h3> {params.event_name}s</h3>
            {Condata.map((e)=>{
              return <>
              <div>
              <i class="fa-regular fa-calendar-check"></i> <span>{e.date}</span>
                <p onClick={EventBox}>{e.event_title}</p>
                <i class="fa-solid fa-location-arrow"></i> <span>{e.location}</span><br />
                <i class="fa-solid fa-business-time" style={{fontSize:"13px"}}></i> <span style={{fontSize:"14px"}}>{e.capacity-e.available} Remaining out of {e.capacity}</span>
                </div>    
            </>})} 
            </>
              
          )}
          </div>
           </div>
           <div className='col-6 entire_detail'>
            <h3 className='text-center'>Event Detail</h3>
           
            {!er?(<></>):( <>
              <div>
                  <div>
                  <p style={{fontWeight:"600",textAlign:'center',fontSize:"20px"}}>{er.event_title}</p>
                </div>
                <div>
                  <p><span>Starting Date: </span>{er.date}</p>
                </div>
                <div>
                  <p><span>Ending Date: </span>{er.dead_line}</p>
                </div>
                <div>
                  <p><span>Venue: </span>{er.location}</p>
                </div>
                <div>
                  <p><span>About the Event: </span>{er.description}</p>
                </div>
                <div>
                  <p><span>Event Enquiry Email Address: </span>{er.email}</p>
                </div>
                <div>
                  <p><span>Organized by: </span>{er.organizer}</p>
                </div>
                <div>
                  <p><span>Special Requirement: </span>{er.special_requirment}</p>
                </div>
                <p className='text-center mt-3' style={{marginBottom:"0px"}}>
                  {er.capacity-er.available==0?(<><button className='btn btn-info' disabled style={{backgroundColor:"red",color:"white"}}>Registraton closed</button></>):(<><button className='btn btn-info' onClick={registerBtn}>Register Now</button></>)}
                </p>
                </div>
              </>
            )}
           
           </div>
        </div>
        </div>
        </>
        )
}
export default browseEvent