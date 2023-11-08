import { useState } from "react";

export function useCategory(initialCategory) {
  const [category, setCategory] = useState(initialCategory);

  const changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return { category, changeCategory };
}
