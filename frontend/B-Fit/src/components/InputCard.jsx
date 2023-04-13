import { useState } from "react";
import BMIValue from "./BMIValue";
import SemiCircleIndicator from "./SemiCircleIndicator";

function InputCard() {

    const [client, setClient] = useState({
        "clientId": "",
        "gender": "",
        "age": "",
        "weight": "",
        "height": ""
    })
    const [value, setValue] = useState(0);

    function handleClientIdChange(e) {
        setClient
            ({
                ...client,
                clientId: e.target.value
            })
    }
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
    function handleWeightChange(e) {
        setClient
            ({
                ...client,
                weight: e.target.value
            })
    }
    function handleHeightChange(e) {
        setClient
            ({
                ...client,
                height: e.target.value
            })
    }

    function submitClientData(client) {

        if (client["gender"] !== "" && client["age"] !== ""  && client["weight"] !== "" && client["height"] !== "") {
            const clientData = {
                ...client,
                clientId: client.clientId === null ? parseFloat(client.clientId) : -1,
                age: parseFloat(client.age),
                weight: parseFloat(client.weight),
                height: parseFloat(client.height)
            };
            console.log(client);
            fetch('/api/client/registeredBMI', {
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
                    "clientId": "",
                    "gender": "",
                    "age": "",
                    "weight": "",
                    "height": ""
                });

        }
    }

    return (
        <div className="container">
            <div id="input-table">
                <div id="input-fields">
                    <input placeholder="client id" type="number" value={client.clientId} onChange={handleClientIdChange}></input>
                    <select name="genders" id="cars" value={client.gender} onChange={handleGender}>
                        <option value="">-Choose a gender-</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                    </select>
                    <input placeholder="age" type="number" value={client.age} onChange={handleAgeChange}></input>
                    <input placeholder="weight" type="number" value={client.weight} onChange={handleWeightChange}></input>
                    <input placeholder="height" type="number" value={client.height} onChange={handleHeightChange}></input>
                    <button id="submitBtn" onClick={() => { submitClientData(client); }}>Calculate</button>

                    {value > 0
                        ?
                        <div>
                            <BMIValue value={value} />
                        </div>
                        : <></>

                    }
                </div>

            </div>
            {value > 0 ?
                <div id="result-table">
                    <SemiCircleIndicator value={value} />
                </div>
                : <></>
            }
        </div>
    )
}
export default InputCard;
