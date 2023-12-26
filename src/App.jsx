import React from "react"
import NavBar from "./layouts/NavBar"
import FormsInputs from "./forms/FormsInputs"
import LoginForm from "./forms/LoginForm"
import SocietyRegistrationForm from "./forms/SocietyRegistrationForm"
function App() {
  // pure js

  return (
    <>
      <NavBar />
      <FormsInputs />
      <LoginForm />
      <SocietyRegistrationForm />
      {/* html */}
      {/* technically it is not html, but it is jsx */}
      

    </>
  )
}

export default App
