import { useState } from "react";

export function useSubSessionForm(supabase) {
  const [category, setCategory] = useState("strength");
  const [subSessionData, setSubSessionData] = useState({
    exerciseName: "",
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

  const handleInsertion = async (values, category, updateSuccessMessage) => {
    // You should add your Supabase logic for data insertion here
    // Make API calls to insert data into your database using Supabase
    try {
      // Example code (you need to adapt this to your Supabase setup)
      const { data, error } = await supabase
        .from("your_table_name")
        .insert([
          {
            exerciseName: values.exerciseName,
            startTime: values.startTime,
            endTime: values.endTime,
            sets: values.sets,
            repsPerSet: values.repsPerSet,
            category: category,
          },
        ]);
      if (error) {
        // Handle the error
        console.error("Error inserting data:", error);
        setIsSuccess(false);
        updateSuccessMessage("Failed to insert data.");
      } else {
        // Data inserted successfully
        setIsSuccess(true);
        updateSuccessMessage("Data inserted successfully.");
      }
    } catch (error) {
      console.error("Error:", error);
      setIsSuccess(false);
      updateSuccessMessage("An error occurred.");
    }
  };

  const handleAddSubSession = () => {
    // You can call the handleInsertion function here to insert data
    handleInsertion(subSessionData, category, setSuccessMessage);
  };

  return {
    category,
    subSessionData,
    successMessage,
    isSuccess,
    handleInputChange,
    handleCategoryChange,
    handleAddSubSession,
    handleInsertion, // Export this function if needed in other components
  };
}
