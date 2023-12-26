import React from 'react'
import '../styles/ModifyNavBar.css'
// how to write modular css in react js

const NavBar = () => {
    return (
        <>
            <div className="header-top">
                <nav className="navbar">
                    <div className="brand-logo-name">
                        <img src="https://pucit.edu.pk/wp-content/uploads/2021/03/logo-new.png" alt="fcit-logo" height="50px" />
                    </div>
                    <div className="navigation-links">
                        <ul className="links">
                            <li className="navigation">HOME</li>
                            <li className="navigation">DEPARTMENTS</li>
                            <li className="navigation">ADMISSIONS</li>
                            <li className="navigation">STUDENT SOCIETIES</li>
                            <li className="navigation">NOTICE BOARD</li>
                            <li className="navigation">STUDENT PORTAL</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>

    )
}

export default NavBar