function HandleDatabaseError(errorCode, updateSuccessMessage) {
  // can add more specific error handling here
  if (errorCode === "23505") {
    updateSuccessMessage("Exercise already exists.");
  } else {
    updateSuccessMessage(`Error code ${errorCode}: failed to add exercise."`);
  }
}

export { HandleDatabaseError };
