import { useState } from "react";

export function useSuccessMessage() {
  const [successMessage, setSuccessMessage] = useState("");

  const updateSuccessMessage = (message) => {
    setSuccessMessage(message);
  };

  return { successMessage, updateSuccessMessage };
}
