import React, { useState, useEffect } from 'react';

function Time() {
  const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {setCurrTime(new Date().toLocaleTimeString());}, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='time'>
      <h1>Current Time</h1>
      <p>{currTime}</p>
    </div>
  );
};

export default Time;
