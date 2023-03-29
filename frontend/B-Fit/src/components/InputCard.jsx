import { useState } from "react";
import BMIValue from "./BMIValue";

function InputCard() {

    const [user, setUser] = useState({
        "gender": "",
        "age": "",
        "weight": "",
        "height": ""
    })
    const [value, setValue] = useState(0);

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
        const userData = {
            ...user,
            age: parseFloat(user.age),
            weight: parseFloat(user.weight),
            height: parseFloat(user.height)
          };
        
        fetch('/api/user/actual-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(res => setValue(res));

        setUser({
            "gender": "",
            "age": "",
            "weight": "",
            "height": ""
        });
       
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
                <button onClick={() => { submitUserData(user); }}>Submit</button>
            </div>
            <BMIValue value={value}/>
        </div>
    )
}
export default InputCard;
