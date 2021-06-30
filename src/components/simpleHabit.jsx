import React, { useEffect, useRef, useState } from "react";

const SimpleHabit = (props) => {
  // state = {
  //   count: 0,
  // };
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(`mounted & update : ${count}`);
  }, [count]);

  return (
    <li className='habit'>
      <span ref={spanRef} className='habit-name'>
        Reading
      </span>
      <span className='habit-count'>{count}</span>
      <button className='habit button habit-increase' onClick={handleIncrement}>
        <i className='fas fa-plus-square'></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
