import { useEffect, useState } from "react";


function Progress(){

    const [listBMI, setListBMI] = useState([]);

    useEffect(() => {
        fetch(`/api/client/bmi-list/${id}`)
            .catch(e => console.error(e))
            .then(response => response.json())
            .then(response => {
                setListBMI(response);
            });
    }, []);

return (
    <div className="list-BMI">
        <ul>
            {listBMI.map(bmi => 
                <li>{bmi}</li>)}
        </ul>
    </div>
)


}

export default Progress;