import { useState } from 'react';

export function useExerciseForm() {
  const [category, setCategory] = useState("strength");
  const [exerciseData, setExerciseData] = useState({
    exerciseName: "",
    description: "",
    caloriesPerRep: 0,
    caloriesPerDuration: 0,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setIsSuccess(false);
  };

  const handleAddExercise = () => {
    setSuccessMessage(
      `Successfully added ${category === "cardio" ? "Cardio" : "Strength"} Exercise.`
    );
    setIsSuccess(true);
    setExerciseData({
      exerciseName: "",
      description: "",
      caloriesPerRep: 0,
      caloriesPerDuration: 0,
    });
  };

  return {
    category,
    exerciseData,
    successMessage,
    isSuccess,
    handleInputChange,
    handleCategoryChange,
    handleAddExercise,
  };
}
