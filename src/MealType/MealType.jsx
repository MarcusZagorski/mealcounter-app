/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./MealType.css";

const MealType = ({ meal, setTotal, reset }) => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    setCount(0);
  }, [reset]);

  return (
    <div className="mealContainer">
      <p className="meal-name">{meal}</p>
      <button
        onClick={() => {
          handleClick();
          setTotal((prevTotal) => prevTotal + 1);
        }}
        className="meal-count"
      >
        {count}
      </button>
    </div>
  );
};

export default MealType;
