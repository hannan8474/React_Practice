import React, { useState } from 'react'
import { Link } from "react-router-dom"
import forms from '../styles/FormsStyling.module.css'

const SocietyRegistrationForm = () => {

    const [userRegistration, setuserRegistration] = useState({
        name: '',
        rollno: '',
        department: '',
        semester: '',
        hobbies: '',
        aboutyourself: '',
    });
    const HandleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserRegistration({ ...userRegistration, [name]: value });
    }
    const [records, setrecords] = useState([]);
    const HandleSubmit = (e) => {
        e.preventDefault();
        const NewRecord = { ...userRegistration, id: new Date().getTime().toString() };
        setrecords([...records, NewRecord]);
        setuserRegistration({
            name: '',
            rollno: '',
            department: '',
            semester: '',
            hobbies: '',
            aboutyourself: '',
        });
    }
    return (
        <>
            <div className={forms.content}>
                <form action="" className={forms.styling} onSubmit={HandleSubmit}>
                    <div className={forms.FormInputs}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={HandleInput} value={userRegistration.name} className={forms.InputStyling} placeholder="Name" />
                    </div>
                    <div className={forms.FormInputs}>
                        <label htmlFor="rollno">Roll No:</label>
                        <input type="text" name="rollno" id="rollno" onChange={HandleInput} value={userRegistration.rollno} className={forms.InputStyling} placeholder="Roll No" />
                    </div>
                    <div className={forms.FormInputs}>
                        <label htmlFor="department">Department:</label>
                        <input type="text" name="department" id="department" onChange={HandleInput} value={userRegistration.department} className={forms.InputStyling} placeholder="Department" />
                    </div>
                    <div className={forms.FormInputs}>
                        <label htmlFor="semester">Semester:</label>
                        <input type="text" name="semester" id="semester" onChange={HandleInput} value={userRegistration.semester} className={forms.InputStyling} placeholder="Semester" />
                    </div>
                    <div className={forms.FormInputs}>
                        <label htmlFor="hobbies">Hobby/Hobbies:</label>
                        <input type="text" name="hobbies" id="hobbies" onChange={HandleInput} value={userRegistration.hobbies} className={forms.InputStyling} placeholder="Hobbies" />
                    </div>
                    <div className={forms.FormInputs}>
                        <label htmlFor="aboutyourself">Why should we consider you?</label>
                        <textarea name="aboutyourself" id="aboutyourself" onChange={HandleInput} value={userRegistration.aboutyourself} cols="30" rows="10" className={forms.InputStyling} placeholder='About Yourself'></textarea>
                    </div>

                    <div>
                        <button type="Submit" className={forms.ButtonStyling}><Link to='/RegistrationConfirmed'>Register Now</Link></button>
                    </div>
                </form>
            </div>
            <div>
                {
                    records.map((curElem) => {
                        return (
                            <div key={curElem.id} className={forms.ShowData}>
                                <p>{curElem.name}</p>
                                <p>{curElem.rollno}</p>
                                <p>{curElem.department}</p>
                                <p>{curElem.semester}</p>
                                <p>{curElem.hobbies}</p>
                                <p>{curElem.aboutyourself}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default SocietyRegistrationForm