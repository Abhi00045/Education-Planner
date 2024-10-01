import React, { useState } from "react";

const DisplayDetails = ({ subjects, handleHoursChange }) => {
  const updateSubjects = (id, hours) => {
    const subCopy = subjects.map((item) => {
      if (item.id === id && hours >= 0) return { ...item, hours };
      return item;
    });
    localStorage.setItem("subjects", JSON.stringify(subCopy));
    handleHoursChange();
  };
  return (
    <div className='display-details'>
      <div style={{ width: "100%", height: "fit-content" }}>
        {subjects.map((sub, index) => (
          <div key={index} className='details'>
            <p>{`${sub.subject} - ${sub.hours} hours`}</p>
            <button
              className='increment'
              onClick={() => updateSubjects(sub.id, sub.hours + 1)}
            >
              +
            </button>
            <button
              className='decrement'
              onClick={() => updateSubjects(sub.id, sub.hours - 1)}
            >
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayDetails;
