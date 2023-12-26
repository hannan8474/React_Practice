import React, { useState } from 'react'
import forms from '../styles/FormsStyling.module.css'

const FormsInputs = () => {
  const [userRegistration, setuserRegistration] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });
  const HandleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserRegistration({ ...userRegistration, [name]: value });
  }
  const [records, setRecords] = useState([]);
  const HandleSubmit = (e) => {
    e.preventDefault();
    const newRecord = { ...userRegistration, id: new Date().getTime().toString() };
    setRecords([...records, newRecord]);
    setuserRegistration({ username: '', email: '', phone: '', password: '' });
  }
  return (
    <>
      <div className={forms.content}>
        <form action="" className={forms.styling} onSubmit={HandleSubmit}>
          <div className={forms.FormInputs}>
            <label htmlFor="username">Name:</label>
            <input type="text" autoComplete='off' value={userRegistration.username} onChange={HandleInput} name="username" id="username" className={forms.InputStyling} placeholder='Name' />
          </div>
          <div className={forms.FormInputs}>
            <label htmlFor="email">Email:</label>
            <input type="text" autoComplete='off' value={userRegistration.email} onChange={HandleInput} name="email" id="email" className={forms.InputStyling} placeholder='Email' />
          </div>
          <div className={forms.FormInputs}>
            <label htmlFor="phone">Phone</label>
            <input type="text" autoComplete='off' value={userRegistration.phone} onChange={HandleInput} name="phone" id="phone" className={forms.InputStyling} placeholder='Phone' />
          </div>
          <div className={forms.FormInputs}>
            <label htmlFor="password">Password</label>
            <input type="password" autoComplete='off' value={userRegistration.password} onChange={HandleInput} name="password" id="password" className={forms.InputStyling} placeholder='Password' />
          </div>
          <div>
            <button type="Submit" className={forms.ButtonStyling}>Sign Up</button>
          </div>
        </form>
      </div>
      <div>
        {
          records.map((curElem) => {
            return (
              <div className={forms.ShowData}>
                <p>{curElem.username}</p>
                <p>{curElem.email}</p>
                <p>{curElem.phone}</p>
                <p>{curElem.password}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default FormsInputs