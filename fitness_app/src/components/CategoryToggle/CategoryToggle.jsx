import React from "react";
import styles from "./categoryToggle.module.css";

console.log(styles);
function CategoryToggle({ category, handleCategoryChange }) {
  const changeCategory = (newCategory) => {
    handleCategoryChange(newCategory);
  };
  return (
    <div className={styles["category-toggle"]}>
      <button
        className={`${styles["category-button"]} ${
          category === "strength" ? styles.active : styles.inactive
        }`}
        onClick={() => changeCategory("strength")}
      >
        Strength
      </button>
      <button
        className={`${styles["category-button"]} ${
          category === "cardio" ? styles.active : styles.inactive
        }`}
        onClick={() => changeCategory("cardio")}
      >
        Cardio
      </button>
    </div>
  );
}
export default CategoryToggle;
