import React from 'react'
import { NavLink } from "react-router-dom"
import '../styles/ModifyNavBar.css'
import logo from '../assets/Images/logo-new.png'
// how to write modular css in react js

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#"><img src={logo} alt="Fcit_Logo" height="50px" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/StudentPortal">Student Portal</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="/Departments" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Departments
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item" to="Departments/ComputerScience">Computer Scienced</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="Departments/SoftwareEngineering">Software Engineering</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="Departments/InformationTechnology">Information Technology</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="Departments/DataScience">Data Science</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Admissions">Admissions</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/StudentSocieties">Student Societies</NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavBar