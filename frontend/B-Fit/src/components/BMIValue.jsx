import { useEffect, useState } from "react"

function BMIValue(){

    const[value, setValue] = useState("");

    useEffect(() => {
        fetch('/api/user/1')
        .then(res => res.text())
        .then(valueOfBMI => {
            setValue(parseFloat(valueOfBMI))
        })
    }, [])

    return (
        <div className="BMI-value">
            <p>Your calculated Body Mass Index is:</p>
            {value}
        </div>
    )
}
export default BMIValue;