import React, { useEffect } from 'react'
import './notFound.css'

const notFound = () => {
   useEffect(()=>{
    let navBar = document.getElementById("navBar")
    navBar.style.display="none";
    })
    

  return (
    <>

<img id="not_found_img" src="https://thumbs.dreamstime.com/b/error-rubber-stamp-page-not-found-grungy-symbol-vector-illustration-87577580.jpg" alt="" />
</>
  )
}

export default notFound