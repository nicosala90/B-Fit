import { useEffect, useState } from "react";


function Progress() {
    const [listBMI, setListBMI] = useState({});
  
    useEffect(() => {
      fetch('/api/client/bmi-list/1')
        .then(response => response.json())
        .then(data => {
          setListBMI(data);
        })
        .catch(error => {
          console.error('Error fetching BMI list:', error);
        });
    }, []);
  
    return (
      <div className="list-BMI">
        <ul>
          {Object.values(listBMI).map((bmi, index) => (
            <li key={index}>{bmi}</li>
          ))}
        </ul>
      </div>
    );
  }
export default Progress;