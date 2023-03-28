import { useEffect, useState } from "react"

function BMIValue(){

    const[value, setValue] = useState(0);

    useEffect(() => {
        fetch('/user/1')
        .then(res => res.json())
        .then(valueOfBMI =>{
            setValue(valueOfBMI)
        })
    }, [])

    return (
        <div className="BMI-value">
            {value}
        </div>
    )
}
export default BMIValue;