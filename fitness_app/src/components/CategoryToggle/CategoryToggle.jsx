import React, { useEffect } from "react";
import styles from "./categoryToggle.module.css";

function CategoryToggle({ category, changeCategory }) {
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
