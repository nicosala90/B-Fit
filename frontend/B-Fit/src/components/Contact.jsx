import React from "react";
import { useState } from 'react';
import Chart from "./Chart";
function Contact() {
    const [show, setShow] = useState(true);

    function changeState() {
        setShow(!show);
    }

    function resetState() {
        setShow(!show);
        setPerson({
            "clientName": "",
            "email": "",
            "subject": "",
            "message": "",
        });
    }

    const [person, setPerson] = useState({
        "clientName": "",
        "email": "",
        "subject": "",
        "message": "",
    });

    function handleClientNameChange(e) {
        setPerson({
            ...person,
            clientName: e.target.value
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
                        <input placeholder="Client name" value={person.clientName} onChange={handleClientNameChange} />
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
                        <button className="submitBtn" onClick={() => { changeState(); console.log(person) }}>Send</button>
                    </div>
                </div>
            </div>
            ) : (
                <div>
                    <p>We appreciate you contacting us. One of our colleagues
                        will get back in touch with you soon! Have a great day!
                    </p>
                    <button className="submitBtn" onClick={() => resetState()}>Send another message</button>
                </div>
            )
            }
            <div>
                <Chart/>
            </div>
        </div>
    )
}
export default Contact;