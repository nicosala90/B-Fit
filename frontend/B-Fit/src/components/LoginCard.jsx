import { useState } from "react";

function LoginCard() {

    const [client, setClient] = useState({
        "gender": "",
        "age": "",
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": "",
    })
    const [value, setValue] = useState(0);

    function handleGender(e) {
        setClient
            ({
                ...client,
                gender: e.target.value
            })
    }
    function handleAgeChange(e) {
        setClient
            ({
                ...client,
                age: e.target.value
            })
    }
    function handleFirstNameChange(e) {
        setClient
            ({
                ...client,
                firstName: e.target.value
            })
    }
    function handleLastNameChange(e) {
        setClient
            ({
                ...client,
                lastName: e.target.value
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

    function submitClientData(client) {

        if (client["gender"] !== "" && client["age"] !== "" && client["firstName"] !== "" && client["lastName"] !== ""
            && client["email"] !== "" && client["password"] !== "") {

            const clientData = {
                ...client,
                age: parseFloat(client.age),
                firstName: client.firstName,
                lastName: client.lastName,
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
                    "gender": "",
                    "age": "",
                    "firstName": "",
                    "lastName": "",
                    "email": "",
                    "password": ""
                });

        }
    }

    return (
        <div className="container-login">
            <div id="login-table">
                <div id="login-fields">
                    <select name="genders" id="cars" value={client.gender} onChange={handleGender}>
                        <option value="">-Choose a gender-</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                    <input placeholder="age" type="number" value={client.age} onChange={handleAgeChange}></input>
                    <input placeholder="first name" type="text" value={client.firstName} onChange={handleFirstNameChange}></input>
                    <input placeholder="last name" type="text" value={client.lastName} onChange={handleLastNameChange}></input>
                    <input placeholder="email" type="text" value={client.email} onChange={handleEmailChange}></input>
                    <input placeholder="password" type="text" value={client.password} onChange={handlePasswordChange}></input>
                    <button id="submitBtn" onClick={() => { submitClientData(client); }}>Login</button>  
                </div>
            </div>
        </div>
    )
}
export default LoginCard;
