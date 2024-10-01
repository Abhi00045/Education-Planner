import React, { useRef, useState } from "react";
import DisplayDetails from "./DisplayDetails";

const Input = () => {
  const [data, setData] = useState(
    localStorage.getItem("subjects")
      ? JSON.parse(localStorage.getItem("subjects"))
      : []
  );

  const subjectName = useRef("");
  const hours = useRef(0);

  const handleHoursChange = () => {
    setData(JSON.parse(localStorage.getItem("subjects")));
  };

  const handleAdd = () => {
    const subjectsList = JSON.parse(localStorage.getItem("subjects"));
    if (subjectsList) {
      if (subjectName.current.value != "") {
        const sub = subjectName.current.value;
        const hrs = hours.current.value != "" ? Number(hours.current.value) : 0;
        const userData = { id: Math.random(), subject: sub, hours: hrs };
        subjectsList.push(userData);
        localStorage.setItem("subjects", JSON.stringify(subjectsList));
      }
    } else {
      if (subjectName.current.value != "") {
        const subjectsList = [];
        const sub = subjectName.current.value;
        const hrs = hours.current.value != "" ? Number(hours.current.value) : 0;
        const userData = { id: Math.random(), subject: sub, hours: hrs };
        subjectsList.push(userData);
        localStorage.setItem("subjects", JSON.stringify(subjectsList));
      }
    }
    const storageData = JSON.parse(localStorage.getItem("subjects"))
      ? JSON.parse(localStorage.getItem("subjects"))
      : [];
    setData(storageData);
  };

  return (
    <>
      <div className='inputs'>
        <input
          type='text'
          name='subject-input'
          ref={subjectName}
          placeholder='Search'
        />
        <input
          type='number'
          name='hours-input'
          ref={hours}
          min='0'
          placeholder='Hours'
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <DisplayDetails subjects={data} handleHoursChange={handleHoursChange} />
    </>
  );
};

export default Input;
