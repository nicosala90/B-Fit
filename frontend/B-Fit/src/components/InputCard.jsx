import { useState } from "react";
import BMIValue from "./BMIValue";
function InputCard() {

    const [user, setUser] = useState({
        "gender": "",
        "age": null,
        "weight": null,
        "height": null
    })

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

        fetch('/user/actual-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        setUser({
            "gender": "",
            "age": null,
            "weight": null,
            "height": null
        });
    }

    return (
        <div className="input-table">
            <div className="input-fields">
                <select name="genders" id="cars" value={user.gender} onChange={handleGender}>
                    <option value="">-Choose a gender-</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input placeholder="age" type="number" value={user.age} onChange={handleAgeChange}></input>
                <input placeholder="weight" type="number" value={user.weight} onChange={handleWeightChange}></input>
                <input placeholder="height" type="number" value={user.height} onChange={handleHeightChange}></input>
                <button onClick={() => submitUserData(user)}>Submit</button>
            </div>
            <BMIValue />
        </div>
    )
}
export default InputCard;
