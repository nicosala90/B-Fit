import { useEffect, useState } from "react"

function BMIValue({ value }) {


    return (
        <div className="BMI-value">
            <p>Your calculated Body Mass Index is:</p>
            {value}
        </div>
    )
}
export default BMIValue;