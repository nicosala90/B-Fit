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
        <div id="contact" className="main-content form">
            {show ? (
                <>
                    <h1>Contact Us</h1>

                    <label>
                        First name:
                        <input
                            value={person.firstName}
                            onChange={handleFirstNameChange}
                        />
                    </label>
                    <label>
                        Last name:
                        <input
                            value={person.lastName}
                            onChange={handleLastNameChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            value={person.email}
                            onChange={handleEmailChange}
                        />
                    </label>
                    <label>
                        Subject:
                        <input
                            value={person.subject}
                            onChange={handleSubjectChange}
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            rows="10"
                            value={person.message}
                            onChange={handleMessageChange}
                        />
                    </label>
                    <button id="send" onClick={() => { changeState(); console.log(person) }}>Send</button>
                </>
            ) : (
                <>
                    <p>We appreciate you contacting us. One of our colleagues
                        will get back in touch with you soon! Have a great day!
                    </p>
                    <button id="sendanother" onClick={() => resetState()}>Send another message</button>
                </>
            )}
        </div>

    )

};

export default Contact;