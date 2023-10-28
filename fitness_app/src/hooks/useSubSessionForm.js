import { useState } from "react";

export function useSubSessionForm() {
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
      `Succimport { useState } from "react";

      const useUserWeightForm = (initialDate = new Date().toISOString().slice(0, 10)) => {
        const [date, setDate] = useState(initialDate);
        const [weight, setWeight] = useState("");
      
        const handleDateChange = (e) => {
          setDate(e.target.value);
        };
      
        const handleWeightChange = (e) => {
          setWeight(e.target.value);
        };
      
        const handleAddWeight = () => {
          // You can add the logic to handle weight submission here
        };
      
        return { date, weight, handleDateChange, handleWeightChange, handleAddWeight };
      };
      
      export default useUserWeightForm;
      essfully added ${
        category === "cardio" ? "Cardio" : "Strength"
      } Subsession.`
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
