import { useState } from 'react';

export function useAddSubSession() {
  const [category, setCategory] = useState("strength");
  const [subSessionData, setSubSessionData] = useState({
    sessionName: "",
    exercises: [],
    startTime: "",
    endTime: "",
    sets: 0,
    repsPerSet: 0,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSubSessionData({ ...subSessionData, [name]: value });
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setIsSuccess(false);
  };

  const handleAddSubSession = () => {
    setSuccessMessage(
      `Successfully added ${category === "cardio" ? "Cardio" : "Strength"} Subsession.`
    );
    setIsSuccess(true);
    setSubSessionData({
      sessionName: "",
      exercises: [],
      startTime: "",
      endTime: "",
      sets: 0,
      repsPerSet: 0,
    });
  };

  return {
    category,
    subSessionData,
    successMessage,
    isSuccess,
    handleInputChange,
    handleCategoryChange,
    handleAddSubSession,
  };
}
