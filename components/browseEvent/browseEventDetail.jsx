import React from 'react'
import {Link} from 'react-router-dom'
import "./browseEventDetail.css"



const Data=(props)=>{
    const path = `/browseEvent/${props.event}`
    return (<>
    <Link to={path} className='event_link text-center'>{props.event}</Link>
    </>
       
    )
 
}

const BrowseEventDetail = () => {
  return (
    <div className='browseDetail contaner-lg row justify-content-center'>
       <Data event="Seminar"/>
       <Data event="Conference"/>
       <Data event="Workshop"/>
    </div>
  )
}

export default BrowseEventDetail