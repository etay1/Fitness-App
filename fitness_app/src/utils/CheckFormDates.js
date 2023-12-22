// Custom validation function to check if startTime is before endTime
export function isStartTimeBeforeEndTime(startTime, endTime) {
  if (!startTime || !endTime) {
    return true; // Skip the validation if either time is missing
  }

  return startTime < endTime;
}

// Custom validation function to check if the dates are the same
export function areDatesEqual(startTime, endTime) {
  if (!startTime || !endTime) {
    return true; // Skip the validation if either time is missing
  }

  // Split the datetime-local values into date and time parts
  const startTimeParts = startTime.split("T");
  const endTimeParts = endTime.split("T");

  return startTimeParts[0] === endTimeParts[0];
}
