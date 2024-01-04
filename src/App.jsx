import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Admissions from "./pages/Admissions"
import Departments from "./pages/Departments"
import NoticeBoard from "./pages/NoticeBoard"
import StudentPortal from "./pages/StudentPortal"
import StudentSocieties from "./pages/StudentSocieties"
import RegistrationConfirmed from "./pages/RegistrationConfirmed"
import ErrorPage from "./pages/ErrorPage"
import InformationTechnology from "./pages/InformationTechnology"
import SoftwareEngineering from "./pages/SoftwareEngineering"
import ComputerScience from "./pages/ComputerScience"
import DataScience from "./pages/DataScience"

function App() {
  // pure js

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Admissions' element={<Admissions />} />
        <Route path='/Departments' element={<Departments />}>
          <Route path='ComputerScience' element={<ComputerScience />}></Route>
          <Route path='SoftwareEngineering' element={<SoftwareEngineering />}></Route>
          <Route path='InformationTechnology' element={<InformationTechnology />}></Route>
          <Route path='DataScience' element={<DataScience />}></Route>
        </Route>
        <Route path='/NoticeBoard' element={<NoticeBoard />} />
        <Route path='/StudentPortal' element={<StudentPortal />} />
        <Route path='/StudentSocieties' element={<StudentSocieties />} />
        <Route path='/RegistrationConfirmed' element={<RegistrationConfirmed />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
