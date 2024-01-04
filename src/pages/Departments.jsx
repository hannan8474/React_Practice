import React from 'react'
import { Link, Outlet } from "react-router-dom"
import NavBar from '../layouts/NavBar'

const Departments = () => {
  return (
    <>
      <NavBar />
      <div>
        <h3>These are our departments</h3>
        <ul>
          <li><Link to='ComputerScience'>Computer Science</Link></li>
          <li><Link to='SoftwareEngineering'>Software Engineering</Link></li>
          <li><Link to='InformationTechnology'>Information Technology</Link></li>
          <li><Link to='DataScience'>Data Science</Link></li>
        </ul>
      </div>
      <Outlet />
    </>
  )
}

export default Departments