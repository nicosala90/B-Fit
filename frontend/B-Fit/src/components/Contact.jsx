import React from "react";
import { useState } from 'react';

function Contact() {
    const [show, setShow] = useState(true);

    function changeState() {
        setShow(!show);
    }

    function resetState() {
        setShow(!show);
        setPerson({
            "firstName": "",
            "lastName": "",
            "email": "",
            "subject": "",
            "message": "",
        });
    }

    const [person, setPerson] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "subject": "",
        "message": "",
    });

    function handleFirstNameChange(e) {
        setPerson({
            ...person,
            firstName: e.target.value
        });
    }

    function handleLastNameChange(e) {
        setPerson({
            ...person,
            lastName: e.target.value
        });
    }

    function handleEmailChange(e) {
        setPerson({
            ...person,
            email: e.target.value
        });
    }

    function handleSubjectChange(e) {
        setPerson({
            ...person,
            subject: e.target.value
        });
    }

    function handleMessageChange(e) {
        setPerson({
            ...person,
            message: e.target.value
        });
    }

    return (
        <div className="container-contact">
            <h1>Contact Us</h1>
            {show ? (<div id="login-table" >
                <div id="login-fields">
                    <label>
                        <input placeholder="First name" value={person.firstName} onChange={handleFirstNameChange} />
                    </label>
                    <label>

                        <input placeholder="Last name" value={person.lastName} onChange={handleLastNameChange} />
                    </label>
                    <label>
                        <input placeholder="E-mail" value={person.email} onChange={handleEmailChange} />
                    </label>
                    <label>
                        <input placeholder="Subject" value={person.subject} onChange={handleSubjectChange} />
                    </label>
                    <label>
                        <textarea placeholder="Message" rows="10" value={person.message} onChange={handleMessageChange} />
                    </label>
                    <div>
                        <button id="submitBtn" onClick={() => { changeState(); console.log(person) }}>Send</button>
                    </div>
                </div>
            </div>
            ) : (
                <div>
                    <p>We appreciate you contacting us. One of our colleagues
                        will get back in touch with you soon! Have a great day!
                    </p>
                    <button id="submitBtn" onClick={() => resetState()}>Send another message</button>
                </div>
            )
            }
        </div>
    )
}
export default Contact;