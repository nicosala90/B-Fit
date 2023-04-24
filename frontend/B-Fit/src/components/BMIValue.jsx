import { useEffect, useState } from "react"

function BMIValue({ value }) {

    return (
        <div className="BMI-value">
            {value.toFixed(2) > 0 ? 
                <>
                    <p>Your calculated Body Mass Index is:</p>
                    <p id="BMI-value">
                        { value.toFixed(2)}
                    </p>
                </>
             : null
            }
        </div>
    )
}
export default BMIValue;