import React from 'react'
import { useNavigate } from 'react-router-dom'

const RegistrationConfirmed = () => {
    const navigate = useNavigate();
    return (
        <>
            <h3>
                Congratulations, registered successfully.
            </h3>
            <p>A confirmation email will be sent to you shortly</p>
            <button onClick={() => navigate(-1)}>Go back</button> {/*to navigate back "-1" is used */}
            {/* to navigate programmatically we use usenavigate hook. */}
        </>
    )
}

export default RegistrationConfirmed