import ReactSpeedometer from "react-d3-speedometer"

function SemiCircleIndicator(){
 /*    Age	Underweight	Normal weight	Overweight	Obese	Severely obese
    18-24	<18.5		18.5-24.9	25-29.9	3	0-39.9		≥40
    25-34	<19		19-24.9		25-29.9		30-39.9		≥40
    35-44	<20		20-24.9		25-29.9		30-39.9		≥40
    45-54	<21		21-24.9		25-29.9		30-39.9		≥40
    55-64	<22		22-24.9		25-29.9		30-39.9		≥40
    65-74	<23		23-24.9		25-29.9		30-39.9		≥40
    ≥75	<24		24-24.9		25-29.9		30-39.9		≥40 */
    return(
        <div>
            <ReactSpeedometer
            value={300}
            width={600}
            currentValueText="BMI"
            customSegmentLabels={[
              {
                text: "Under weight",
                position: "INSIDE",
                color: "#555",
                fontSize: "19px"
              },
              {
                text: "Normal weight",
                position: "INSIDE",
                color: "#555",
                fontSize: "19px"
              },
              {
                text: "Overweight",
                position: "INSIDE",
                color: "#555",
                fontSize: "19px",
              },
              {
                text: "Obese",
                position: "INSIDE",
                color: "#555",
                fontSize: "19px"
              },
              {
                text: "Severely obese",
                position: "INSIDE",
                color: "#555",
                fontSize: "19px"
              },
            ]}
            />
        </div>
    )
}
export default SemiCircleIndicator;