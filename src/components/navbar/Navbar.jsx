import React from 'react'
import './nav.css'
function Navbar() {
  return (
    <>
 <div className="nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          Sports Manager
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      
      <div className="nav-links">
        <a href="" target="_blank" rel="noopener noreferrer">Home</a>
        <a href="" target="_blank" rel="noopener noreferrer">About</a>
        
        <a href="/auth">login</a>
     
      </div>
    </div>
    </>
  )
}

export default Navbar