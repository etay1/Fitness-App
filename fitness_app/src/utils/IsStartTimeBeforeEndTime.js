export const isStartTimeBeforeEndTime = (startTime, endTime) => {
  if (startTime && endTime) {
    return startTime < endTime;
  }
  return true;
};
