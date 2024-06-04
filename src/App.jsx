import "./App.css";
import MealType from "./MealType/MealType";
import { useState } from "react";

function App() {
  const meals = ["Vegetarian", "Vegan", "Halal", "Gluten-free", "Anything!"];
  const [total, setTotal] = useState(0);
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setReset((reset) => !reset);
    setTotal(0);
  };
  return (
    <>
      <p className="app-title">Meal Counter</p>
      <div className="box-container">
        <div className="meals-container">
          {meals.map((mealType, index) => {
            return (
              <MealType
                meal={mealType}
                key={index}
                setTotal={setTotal}
                reset={reset}
              />
            );
          })}
          <p className="total">Total: {total}</p>
          <button onClick={handleReset} className="reset-btn">
            RESET
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
