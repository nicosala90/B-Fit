import { useState } from "react";
function Login (){

    const [client, setClient] = useState({
        "username": "",
        "password": ""
    })
    const [value, setValue] = useState(0);

    function handleUsername(e) {
        setClient
            ({
                ...client,
                username: e.target.value
            })
    }
    function handlePassword(e) {
        setClient
            ({
                ...client,
                password: e.target.value
            })
    }
   
    function submitClientData(client) {

        if (client["username"] !== "" && client["password"] !== "") {

            const clientData = {
                ...client,
                username: client.username,
                password: client.password
            };
            
            fetch('/api/client/login', {
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
                    "password": ""
                });

        }
    }

    return (
        <div className="container-login">
            <div id="login-table">
                <div id="login-fields">
                    <input placeholder="username" type="text" value={client.username} onChange={handleUsername}></input>
                    <input placeholder="password" type="text" value={client.password} onChange={handlePassword}></input>
                    <button className="submitBtn" onClick={() => { submitClientData(client); }}>Login</button>  
                </div>
            </div>
        </div>
    )
}
export default Login;

