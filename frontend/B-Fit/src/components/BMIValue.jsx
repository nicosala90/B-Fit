import { useEffect, useState } from "react"

function BMIValue({ show, setShow }) {

    const [value, setValue] = useState("");


    useEffect(() => {
        if (show) {
            fetch('/api/user/1')
                .then(res => res.text())
                .then(valueOfBMI => {
                    setValue(parseFloat(valueOfBMI))
                })
                setShow(false);
        }
    }, [show])

    return (
        <div className="BMI-value">
            <p>Your calculated Body Mass Index is:</p>
            {value}
        </div>
    )
}
export default BMIValue;