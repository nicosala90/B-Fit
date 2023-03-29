import { useState } from "react";
import BMIValue from "./BMIValue";

function InputCard() {

    const [user, setUser] = useState({
        "gender": "",
        "age": 0,
        "weight": 0,
        "height": 0
    })
    const [show, setShow] = useState(false);

    function handleGender(e) {
        setUser({
            ...user,
            gender: e.target.value
        })
    }
    function handleAgeChange(e) {
        setUser({
            ...user,
            age: e.target.value
        })
    }
    function handleWeightChange(e) {
        setUser({
            ...user,
            weight: e.target.value
        })
    }
    function handleHeightChange(e) {
        setUser({
            ...user,
            height: e.target.value
        })
    }
    //check user input validation
    function submitUserData(user) {
        if (user["gender"] !== "" && user["age"] !== "" && user["weight"] !== "" && user["height"] !== "") {
            fetch('/api/user/actual-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            setUser({
                "gender": "",
                "age": 0,
                "weight": 0,
                "height": 0
            });
            setShow(true);
        }
        else console.log(user);

    }
    return (
        <div className="input-table">
            <div className="input-fields">
                <select name="genders" id="cars" value={user.gender} onChange={handleGender}>
                    <option value="">-Choose a gender-</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select>
                <input placeholder="age" type="number" value={user.age} onChange={handleAgeChange}></input>
                <input placeholder="weight" type="number" value={user.weight} onChange={handleWeightChange}></input>
                <input placeholder="height" type="number" value={user.height} onChange={handleHeightChange}></input>
                <button id="submitBtn" onClick={() => { submitUserData(user); }}>Submit</button>
                <div className="BMI-value">
                    <BMIValue show={show} setShow={setShow} />
                </div>
            </div>
        </div>
    )
}
export default InputCard;
