import { useState } from "react";

function SignIn() {

    const [client, setClient] = useState({
        "username": "",
        "email": "",
        "password": "",
        "birthday": "",
        "height": ""
    })
    const [value, setValue] = useState(0);

    const [show, setShow] = useState(false)

    function handleUserNameChange(e) {
        setClient
            ({
                ...client,
                username: e.target.value
            })
    }
    function handleEmailChange(e) {
        setClient
            ({
                ...client,
                email: e.target.value
            })
    }
    function handlePasswordChange(e) {
        setClient
            ({
                ...client,
                password: e.target.value
            })
    }
    function handleBirthdayChange(e) {
        setClient
            ({
                ...client,
                birthday: e.target.value
            })
    }
    function handleHeightChange(e) {
        setClient
            ({
                ...client,
                height: e.target.value
            })
    }

    function showMoreDataFields() {
        setShow(true)
    }

    function submitClientData(client) {

        if (client["username"] !== "" && client["email"] !== "" && client["password"] !== "") {

            const clientData = {
                ...client,
                username: client.username,
                email: client.email,
                password: client.password
            };

            fetch('/api/client/add-client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(clientData)
            })
                .then(res => res.json())
                .then(res => setValue(res));

            setClient
                ({
                    "username": "",
                    "email": "",
                    "password": ""
                });

        }
    }

    return (
        <div className="container-login">
            <div id="login-table">
                <div id="login-fields">
                    <input placeholder="username" type="text" value={client.username} onChange={handleUserNameChange}></input>
                    <input placeholder="email" type="text" value={client.email} onChange={handleEmailChange}></input>
                    <input placeholder="password" type="text" value={client.password} onChange={handlePasswordChange}></input>
                    {show ?
                        (
                            <>
                                <input placeholder="birthdate" type="date" value={client.birthday} onChange={handleBirthdayChange}></input>
                                <input placeholder="height" type="text" value={client.height} onChange={handleHeightChange}></input>
                                <button className="submitBtn" onClick={() => { submitClientData(client); }}>Sign in</button>
                            </>
                        )
                        : null}
                </div>
                {!show ?
                    (
                        <div>
                            <span>
                                <p>If you want to save your personal data for calculate BMI please give more information </p>
                                <button className="submitBtn" onClick={showMoreDataFields}>Click here</button>
                            </span>
                        </div>
                    )
                    : null}
            </div>
        </div>
    )
}
export default SignIn;
