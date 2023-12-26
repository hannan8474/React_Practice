import React, { useState } from 'react'
import forms from '../styles/FormsStyling.module.css'

const LoginForm = () => {
    const [userRegistration, setuserRegistration] = useState({
        UserId: '',
        password: '',
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
        setuserRegistration({ UserId: '', password: '' });
    }
    return (
        <>
            <div className={forms.content}>
                <form action="" className={forms.styling} onSubmit={HandleSubmit}>
                    <div className={forms.FormInputs}>
                        <label htmlFor="UserId">User Id:</label>
                        <input type="text" name="UserId" id="UserId" className={forms.InputStyling} placeholder="User Id" onChange={HandleInput} value={userRegistration.UserId} />
                    </div>
                    <div className={forms.FormInputs}>
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" id="password" className={forms.InputStyling} placeholder="password" onChange={HandleInput} value={userRegistration.password} />
                    </div>
                    <div>
                        <button type="Submit" className={forms.ButtonStyling}>Login</button>
                    </div>
                </form>
            </div>
            <div>
                {
                    records.map((curElem) => {
                        return (
                            <div key={curElem.id} className={forms.ShowData}>
                                <p>{curElem.UserId}</p>
                                <p>{curElem.password}</p>
                            </div>
                        )
                    })
          }
            </div>
        </>
    )
}

export default LoginForm