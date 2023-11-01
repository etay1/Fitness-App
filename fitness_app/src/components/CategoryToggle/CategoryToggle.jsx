import React from 'react';

function CategoryToggle({ category, handleCategoryChange }) {
  const changeCategory= (newCategory) => {
    handleCategoryChange(newCategory);
  }
    return (

        <div className="category-toggle">
            <button
              className={`category-button ${
                category === "strength" ? "active" : "inactive"
              }`}
              onClick={() => changeCategory("strength")}
            >
              Strength
            </button>
            <button
              className={`category-button ${
                category === "cardio" ? "active" : "inactive"
              }`}
              onClick={() => changeCategory("cardio")}
            >
              Cardio
            </button>
        </div>
    
    );
}    
export default CategoryToggle;
