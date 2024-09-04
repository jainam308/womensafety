import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
       <div className="sidebar-menu sticky-sidebar-menu">
       <div className="logo">
        <h1>
        
          <a href="index.html">WomenSafety</a>
        </h1>
      </div>
        <div className="sidebar-menu-inner">
         <ul className="nav nav-pills nav-stacked custom-nav">
          <li className="active">
          <Link to="/Index">
              <i className="fa fa-tachometer" />
              <span> Dashboard</span>
              </Link>
          </li>
         <br/>
         <br/>
          <li>
            <Link to="/CommandCenter">
              <i className="fa fa-table" /> <span>Command Center</span>
              </Link>
          </li>
         
        </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar